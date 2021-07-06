import React from "react";
import { useSelector } from "react-redux";
import { SlideDown } from "react-slidedown";
import { Content } from "./components/Content";
import { AddTodoForm } from "./components/AddTodoForm";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-slidedown/lib/slidedown.css";

const App = () => {
  const totalTodos = useSelector((state) => state.todos.length);

  const transition = {
    transition: "all ease-out 0.5s",
  };

  return (
    <Container
      id='main-container'
      className='bg-light p-5 rounded'
      style={transition}
    >
      <h1>My Todo List</h1>
      <hr className='mb-5'></hr>
      <AddTodoForm />
      <SlideDown className={"my-dropdown-slidedown"}>
        {totalTodos > 0 && <Content />}
      </SlideDown>
    </Container>
  );
};

export default App;
