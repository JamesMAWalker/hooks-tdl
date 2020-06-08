import React, { useContext } from 'react';

import { TodosContext } from '../contexts/todos.context';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import TodoItem from './todo-item.component';


function TodoList() {
  const { tasks } = useContext(TodosContext)

  if (tasks.length)
    return (
      <Paper>
        <List>
          {
            tasks ?
            tasks.map((td, i) => (
            <>
              <TodoItem
                {...td}
                key={td.id}
              />
              {i < tasks.length - 1 && <Divider />}
            </>
          ))
            :
            <p>'Add a task...</p>
          }
        </List>
      </Paper>
    );
    return
}

export default TodoList;