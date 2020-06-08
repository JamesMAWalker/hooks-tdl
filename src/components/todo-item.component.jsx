import React, { useContext } from 'react';

import { DispatchContext } from '../contexts/todos.context';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';

import useToggle from '../custom-hooks/useToggle';
import TodoEditor from './todo-editor.component';

function TodoItem({ id, task, complete }) {
  const [isEditing, toggle] = useToggle();
  const dispatch = useContext(DispatchContext);

  const handleDelete = () => {
    dispatch({ type: 'REMOVE', id: id })
  }

  const handleCheck = () => {
    dispatch({ type: 'TOGGLECOMPLETE', id: id })
  }
  
  // console.log('todo form render!');
  
  return (
    <ListItem style={{ height: '75px' }} >
      {isEditing ? (
        <TodoEditor id={id} task={task} toggleForm={toggle} />
      ) : (
        <>
          <Checkbox tabinddex={-1} onClick={handleCheck} checked={complete} />
          <ListItemText>
            <span style={{ textDecoration: complete ? 'line-through' : 'none' }}>
              {task ? task : 'Add a task...'}
            </span>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={handleDelete}>
              <DeleteRounded aria-label='delete' />
            </IconButton>
            <IconButton onClick={() => toggle()}>
              <EditIcon aria-label='edit' />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;