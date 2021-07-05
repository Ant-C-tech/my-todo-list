import React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ListGroup className='mb-5'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ListGroup>
  );
};
