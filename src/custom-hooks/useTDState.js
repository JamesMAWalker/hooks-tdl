import useLocalStorageState from './useLocalStorageState';
import { v4 as uuid } from 'uuid';

export default initialTodos => {
  const [tasks, setTasks] = useLocalStorageState('tasks', initialTodos);

  return {
    tasks,
    addTask: (newTask) => {
      setTasks([...tasks, { id: uuid(), task: newTask, completed: false }]);
    },
    removeTask: (id) => {
      const newTasks = tasks.filter((task) => task.id !== id);

      setTasks([...newTasks]);
    },
    toggleComplete: (id) => {
      const newTasks = tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      setTasks([...newTasks]);
    },
    editTask: (id, newTask) => {
      const newTasks = tasks.map((t) =>
        t.id === id ? { ...t, task: newTask } : t
      );
      setTasks([...newTasks]);
    },
  };
}
