import React from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ id, title, onRemoveTodo }) => (
  <li className={styles.ListItem}>
    {title}
    <button type="button" onClick={() => onRemoveTodo(id)}>
      Remove
    </button>
  </li>
);

export default TodoListItem;
