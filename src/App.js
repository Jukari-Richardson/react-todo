import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Use custom hook to get todoList state and its setter
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Review Road to React" },
    { id: 2, title: "Take notes" },
    { id: 3, title: "Submit Work" },
  ]);

  const [isLoading, setisLoading] = useState(true);

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

  const fetchData = async () => {
    // Declare an empty object variable named options
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    // Create a new variable url
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      // Fetch data from Airtable
      const response = await fetch(url, options);

      // Check if response.ok is false
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Parse the response
      const data = await response.json();

      // Console statement to observe Airtable's API response
      console.log("Example response:", data);

      // Map data.records into an array of todo objects
      const todos = data.records.map((records) => {
        console.log("Record Fields:", records.fields);

        return {
          Title: records.fields.Title,
          id: records.id,
        };
      });

      // Console statement to observe the transformed todos array
      console.log("Transformed todos:", todos);

      // Set the application's todoList
      setTodoList(todos);

      // Set isLoading to false to indicate the fetch is complete
      setisLoading(false);
    } catch (error) {
      // Console statement to log the error's message
      console.error("Error during fetch:", error.message);
    }
  };

  // Replace the contents of the useEffect with a call to fetchData()
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency list

  // Side effect using useEffect hook to update localStorage when todoList changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onAddTodo={addTodo}
                  onRemoveTodo={removeTodo}
                />
              )}
            </>
          }
        />

        <Route
          path="/new"
          element={
            <>
              <h1>New Todo List</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onAddTodo={addTodo}
                  onRemoveTodo={removeTodo}
                />
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
