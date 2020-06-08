import React, { useContext } from 'react';

import { TodosContext } from '../contexts/todos.context';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import TodoItem from './todo-item.component';


function TodoList() {
  const tasks = useContext(TodosContext)

  if (tasks.length)
    return (
      <Paper>
        <List>
          {
            tasks.map((td, i) => (
              <React.Fragment>
                <TodoItem
                  {...td}
                  key={td.id}
                />
                {i < tasks.length - 1 && <Divider />}
              </React.Fragment>
            ))
          }
        </List>
      </Paper>
    );
    return (
      <Paper>
        <p style={{ height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic'}}>No current tasks...</p>
      </Paper>
    )
}

export default TodoList;