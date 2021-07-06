import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

import "./todoList.css";

export const TodoList = () => {
  const [stateTodos, setStateTodos] = useState([]);

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    setStateTodos(todos);
  }, [todos]);

  return (

    <ListGroup className='mb-5'>
      <TransitionGroup className='todo-list'>
        {stateTodos.map((todo) => (
          <CSSTransition key={todo.id} timeout={500} classNames='item'>
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  );
};
