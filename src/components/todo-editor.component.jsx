import React from 'react';

import TextField from '@material-ui/core/TextField';

import useInputState from '../custom-hooks/useInputState';

function TodoEditor({ task, edit, id, toggleForm }) {
  const [value, handleChange, resetInput ] = useInputState(task);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        edit(id, value);
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