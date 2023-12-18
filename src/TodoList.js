import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import AddTodoForm from './AddTodoForm';

function TodoList() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'Review Road to React' },
        { id: 2, title: 'Take notes' },
        { id: 3, title: 'Submit Work' },
    ]);

    const handleAddTodo = (newTodo) => {
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    };

    return (
        <div>
          <AddTodoForm onAddTodo={handleAddTodo}/>
            <ul>
            {todoList.map((item) => (
  <TodoListItem key={item.id} id={item.id} title={item.title} />
))}

            </ul>
        </div>
    );
}

export default TodoList;
