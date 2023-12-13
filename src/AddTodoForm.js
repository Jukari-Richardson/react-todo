import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      {/* Pass value and onChange directly to the input */}
      <InputWithLabel
        label="Title"
        value={todoTitle}
        onChange={handleTitleChange}
        autoFocus
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
