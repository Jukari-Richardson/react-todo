import React from 'react';

const todoList = [
  { id: 1, title: 'Complete assignment 1' },
  { id: 2, title: 'Read a book' },
  { id: 3, title: 'Exercise' }
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
