import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      }),
    );
    setValue("");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row className='align-items-end'>
          <Col lg={10} md={10} sm={10}>
            <Form.Group className='mb-3 mr-3'>
              <Form.Label>Add New ToDo</Form.Label>
              <Form.Control
                type='text'
                placeholder='Add todo...'
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col lg={2} md={2} sm={2} className='text-end'>
            <Button
              className='mb-3'
              variant='primary'
              type='submit'
              disabled={value === ''}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
