import React, { useState, useReducer } from "react";
import styled from "./Todolist.module.scss";
import Todo from "./Todo";

const reducer = (todos, action) => {
  // console.log(state, action);
  const { todoContent, id } = action.payload;
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        // { todoContent: action.payload.todoContent, complete: false },
        newTodo(todoContent),
      ];
    case "TOGGLE":
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "DELETE":
      return todos.filter((todo) => {
        return todo.id !== id;
      });
    default:
      return todos;
  }
};
const newTodo = (todoContent) => {
  return {
    id: Math.floor(Math.random() * 10000),
    todoContent,
    complete: false,
  };
};

const Todolist = () => {
  //  決定每個todo內容
  const [todos, dispatch] = useReducer(reducer, []);

  //  輸入匡狀態
  const [todoContent, setTodoContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { todoContent: todoContent } });
    setTodoContent("");
  };

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1 className={styled.title}>Todolist練習(useReducer版本)</h1>
      <form onSubmit={handleSubmit} className={styled.TodoPage}>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => {
            setTodoContent(e.target.value);
          }}
          placeholder="輸入待辦事項..."
        />
      </form>

      {todos.map((todo) => {
        return <Todo todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Todolist;
