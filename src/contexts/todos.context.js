import React, { createContext, useReducer } from 'react';

import taskReducer from '../reducers/todos.reducer';

import useTDState from '../custom-hooks/useTDState';

export const TodosContext = createContext();

export function TodoProvider({ children }) {
  const initialTodos = [{ id: 1, task: 'ATTAIN BIG WATT', completed: false }];

  const [tasks, dispatch] = useReducer(taskReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
};  
