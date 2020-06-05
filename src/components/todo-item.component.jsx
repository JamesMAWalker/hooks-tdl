import React, { useContext } from 'react';

import { TodosContext } from '../contexts/todos.context';

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
  const { removeTask, toggleComplete } = useContext(TodosContext);

  const handleDelete = () => {
    removeTask(id);
  }

  const handleCheck = () => {
    toggleComplete(id)
  }
  
  return (
    <ListItem style={{ height: '75px' }} >
      {isEditing ? (
        <TodoEditor id={id} task={task} toggleForm={toggle} />
      ) : (
        <>
          <Checkbox tabinddex={-1} onClick={handleCheck} checked={complete} />
          <ListItemText>
            <li style={{ textDecoration: complete ? 'line-through' : 'none' }}>
              {task}
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