import React from "react";

import { useSelector } from "react-redux";
import { Content } from "./components/Content";
import { AddTodoForm } from "./components/AddTodoForm";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const totalTodos = useSelector((state) => state.todos.length);

  return (
    <Container className='bg-light p-5 rounded'>
      <h1>My Todo List</h1>
      <hr className='mb-5'></hr>
      <AddTodoForm />
      {totalTodos > 0 && <Content />}
    </Container>
  );
};

export default App;
