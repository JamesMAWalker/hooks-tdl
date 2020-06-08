import { v4 as uuid } from 'uuid';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': 
      return [...state, { id: uuid(), task: action.task, completed: false }]
    case 'REMOVE': 
      return state.filter(task => task.id !== action.id)
    case 'TOGGLECOMPLETE': 
      return state.map(t => t.id === action.id ? {...t, completed: !t.completed} : t)
    case 'EDIT': 
      return state.map(t => t.id === action.id ? {...t, task: action.newTask } : t)
    default: 
      return state;
  }
}



export default taskReducer;