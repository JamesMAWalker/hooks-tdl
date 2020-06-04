import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import TodoItem from './todo-item.component';


function TodoList({ edit, todos, removeTask, toggleComplete }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((td, i) => (
            <>
              <TodoItem
                {...td}
                edit={edit}
                key={td.id}
                toggleComplete={toggleComplete}
                removeTask={removeTask}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
    return
}

export default TodoList;