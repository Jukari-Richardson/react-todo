import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';  

function App() {
  // Use custom hook to get todoList state and its setter
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Review Road to React' },
    { id: 2, title: 'Take notes' },
    { id: 3, title: 'Submit Work' },
]);

const [isLoading, setisLoading] = useState(true)
  // Function to add a new todo to the list
  const addTodo = (newTodo) => {
    // Update todoList using the setTodoList setter
    setTodoList([...todoList, newTodo]);
  };

   // Handler function to remove a todo item by id
   const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
  };

  useEffect(() => {
    // Inside the side-effect handler function, define a new Promise
    const fetchData = new Promise((resolve, reject) => {
      // Inside the callback function passed to the Promise constructor
      setTimeout(() => {
        // Call the resolve callback after a delay of 2000 milliseconds (2 seconds)
        resolve({
          // Pass an object with property data
          data: {
            // Inside the data object, add a property todoList
            todoList: todoList, // Set its value to the initial/default list state
          },
        });
      }, 2000);
    });

    // Use the fetchData Promise
    fetchData.then((result) => {
      // Update the todoList state with the data received from the Promise
      setTodoList(result.data.todoList);
    // Set isLoading to false after data is loaded
    setisLoading(false);
    });
  }, [todoList]); // Empty dependency list

  // Side effect using useEffect hook to update localStorage when todoList changes
  useEffect(() => { 
  if(!isLoading) 
  
{localStorage.setItem('savedTodoList', JSON.stringify(todoList))};

  }, [todoList, isLoading]);

  // Render JSX
  return (
    <>
      <h1>Todo List</h1>
      
      {/* Component for displaying the todo list */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
      <TodoList todoList={todoList} onAddTodo={addTodo} onRemoveTodo={removeTodo} />
    )}
    </>
  );
}

export default App;



