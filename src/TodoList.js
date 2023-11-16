import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {id: 1, title : "Review Road to React"},
  {id: 2, title: "Take notes"},
  {id: 3, title: "Submit Work"},
]

function TodoList(props){
  return (
   <ul>
    {props.todoList.map((item) => {return <TodoListItem key ={item.id} title={item.title} />; })}
   </ul>
  );
}

export default TodoList;