import React from 'react';
import useTDState from '../custom-hooks/useTDState';

import { TodoProvider } from '../contexts/todos.context';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import TodoList from './todo-list.component';
import TodoForm from './todo-form.component';


function TodoApp(props) {
  // const initialTodos = [{id: 1, task: 'ATTAIN BIG WATT', completed: false}];

  // const { 
  //   tasks,
  //   addTask,
  //   removeTask,
  //   toggleComplete,
  //   editTask,
  //  } = useTDState(initialTodos)

  return (
    <Paper className='TodoApp' elevation={0}>
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>VXX Tasks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={8} lg={5}>
          <TodoProvider>
            <TodoForm />
            <TodoList
              // edit={editTask}
              // todos={tasks}
              // toggleComplete={toggleComplete}
              // removeTask={removeTask}
            />
          </TodoProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;