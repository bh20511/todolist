import React from "react";
import styled from "./Todolist.module.scss";

const Todo = ({ todo, dispatch }) => {
  return (
    <div className={`${styled.TodoPage} ${styled.todo}`}>
      <span style={{ textDecoration: todo.complete ? "line-through" : null }}>
        {todo.todoContent}
      </span>
      <button 
        className={styled.toggle}
        onClick={() => {
          dispatch({ type: "TOGGLE", payload: { id: todo.id } });
        }}
      >
        {todo.complete ? "Cancel" : "Complete"}
      </button>
      <button
        className={styled.delete}
        onClick={() => {
          dispatch({ type: "DELETE", payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
