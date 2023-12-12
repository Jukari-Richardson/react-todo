import React from 'react';

function TodoListItem(props) {
  return (
    <li key={props.id}>{props.title}</li>
  );
}

export default TodoListItem;
