import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';  

// Custom hook for handling semi-persistent state
const useSemiPersistentState = () => {
  // Retrieve saved todo list from localStorage
  const savedTodoList = localStorage.getItem('savedTodoList');

  // Set initialTodoList based on the saved data (if available)
  const initialTodoList = savedTodoList ? JSON.parse(savedTodoList) : [];

  // Define state variable todoList and its setter setTodoList using useState hook
  const [todoList, setTodoList] = useState(initialTodoList);

  // Side effect using useEffect hook to update localStorage when todoList changes
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  // Return todoList state and its setter for use in components
  return [todoList, setTodoList];
};

// Main App component
function App() {
  // Use custom hook to get todoList state and its setter
  const [todoList, setTodoList] = useSemiPersistentState();

  // Function to add a new todo to the list
  const addTodo = (newTodo) => {
    // Update todoList using the setTodoList setter
    setTodoList([...todoList, newTodo]);
  };

  // Side effect using useEffect hook to update localStorage when todoList changes
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  // Render JSX
  return (
    <>
      <h1>Todo List</h1>
      
      {/* Component for adding a new todo */}
      
      
      {/* Component for displaying the todo list */}
      <TodoList todoList={todoList} onAddTodo={addTodo} />
    </>
  );
}

export default App;



