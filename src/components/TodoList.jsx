import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

import "./todoList.css";

export const TodoList = () => {
  const [stateTodos, setStateTodos] = useState([]);
  const [stateContentHeight, setStateContentHeight] = useState("0px");

  const hightRef = useRef();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    setStateTodos(todos);
  }, [todos]);

  useEffect(() => {
    console.log(hightRef.current.clientHeight);
    setStateContentHeight(hightRef.current.clientHeight + "px");
  }, [stateTodos]);

  const containerStyle = {
    transition: "all ease-out 0.5s",
    height: stateContentHeight,
  };

  return (
    <div className='outer-container' style={containerStyle}>
      <div className='inner-container' ref={hightRef}>
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
      </div>
    </div>
  );
};
