import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {  // Destructure onAddTodo from props
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    function handleAddTodo(event) {
        event.preventDefault();
        console.log(todoTitle);
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");  // Fix: Use an empty string, not an assignment
    }

    return (
        <form onSubmit={(e) => handleAddTodo(e)}>
            <label htmlFor="todoTitle">Title</label>
            <input
                id="todoTitle"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
