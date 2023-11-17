import React from "react";
import TodoListItem from "./TodoListItem";

const initialTodoList = [
  {id: 1, title : "Review Road to React"},
  {id: 2, title: "Take notes"},
  {id: 3, title: "Submit Work"},
]

function TodoList(){
  return (
   <ul>
    {initialTodoList.map((item) => {return <TodoListItem key ={item.id} title={item.title} />; })}
   </ul>
  );
}

export default TodoList;