import React, { useContext } from 'react';

import { TodosContext } from '../contexts/todos.context';

import TextField from '@material-ui/core/TextField';

import useInputState from '../custom-hooks/useInputState';

function TodoEditor({ task, id, toggleForm }) {
  const [value, handleChange, resetInput ] = useInputState(task);
  const { editTask } = useContext(TodosContext);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        editTask(id, value);
        resetInput();
        toggleForm();
      }}
      style={{
        width: '100%',
        marginLeft: '1rem',
      }}
    >
      <TextField 
        value={value} 
        onChange={handleChange} 
        autoFocus
      />
    </form>
  );
}

export default TodoEditor;