import React, { useContext } from 'react';

import useInputState from '../custom-hooks/useInputState';

import { DispatchContext } from '../contexts/todos.context';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const [val, handleChange, reset] = useInputState('');

  console.log('todo editor render!');
  return (
    <Paper className='todo-form'>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'ADD', task: val })
        // addTask(val);
        reset();
      }} >
        <TextField value={val} onChange={handleChange} />
        <button type='submit  '>Add New Task</button>
      </form>
    </Paper>
  );
}

export default TodoForm;