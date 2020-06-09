import React, { createContext } from 'react';

import taskReducer from '../reducers/todos.reducer';
import useLocalStorageReducer from '../custom-hooks/useLSReducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider({ children }) {
  const initialTodos = [{ id: 1, task: 'ATTAIN BIG WATT', completed: false }];

  const [tasks, dispatch] = useLocalStorageReducer('tasks', initialTodos, taskReducer)

  return (
    <TodosContext.Provider value={ tasks }>
      <DispatchContext.Provider value={ dispatch }>
        { children }
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
};  
