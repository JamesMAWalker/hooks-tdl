import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';

import useToggle from '../custom-hooks/useToggle';
import TodoEditor from './todo-editor.component';

function TodoItem({ id, task, complete, removeTask, toggleComplete, edit }) {
  const [isEditing, toggle] = useToggle();

  const handleDelete = () => {
    removeTask(id);
  }

  const handleCheck = () => {
    toggleComplete(id)
  }
  
  return (
    <ListItem style={{ height: '75px' }} >
      {isEditing ? (
        <TodoEditor id={id} edit={edit} task={task} toggleForm={toggle} />
      ) : (
        <>
          <Checkbox tabinddex={-1} onClick={handleCheck} checked={complete} />
          <ListItemText>
            <li style={{ textDecoration: complete ? 'line-through' : 'none' }}>
              do me bb: {task}
            </li>
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