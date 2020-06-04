import React from 'react';

import useInputState from '../custom-hooks/useInputState';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function TodoForm({ addTask }) {
  const [val, handleChange, reset] = useInputState('');

  return (
    <Paper className='todo-form'>
      <form onSubmit={e => {
        e.preventDefault();

        addTask(val);
        reset();
      }} >
        <TextField value={val} onChange={handleChange} />
        <button type='submit  '>Add New Task</button>
      </form>
    </Paper>
  );
}

export default TodoForm;