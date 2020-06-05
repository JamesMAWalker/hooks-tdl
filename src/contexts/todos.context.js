import React, { createContext } from 'react';

import useTDState from '../custom-hooks/useTDState';

export const TodosContext = createContext();

export function TodoProvider({ children }) {
  const initialTodos = [{ id: 1, task: 'ATTAIN BIG WATT', completed: false }];

  const todoTools = useTDState(initialTodos)

  return (
    <TodosContext.Provider value={todoTools}>
      {children}
    </TodosContext.Provider>
  )
};  
