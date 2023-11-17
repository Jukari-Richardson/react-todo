// /src/App.js

import React, { useState } from 'react';
import TodoList from './TodoList';  
import AddTodoForm from './AddTodoForm'; 

function App() {
  // Remove newTodo state variable

  // Step 1: Create a state variable named todoList with a default value of an empty array
  const [todoList, setTodoList] = useState([]);

  // Step 2: Declare a new function named addTodo that takes newTodo as a parameter
  const addTodo = (newTodo) => {
    // Step 3: Call the setTodoList state setter
    // Use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      {/* Step 4: Change the value of the onAddTodo prop for AddTodoForm to addTodo */}
      <AddTodoForm onAddTodo={addTodo} />

      {/* Render TodoList component and pass todoList state as a prop */}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
