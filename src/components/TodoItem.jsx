import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import { ListGroup, Form, Row, Col, Button } from "react-bootstrap";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const onChangeStatus = () => {
    dispatch(toggleComplete({ id }));
  };

  const onDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
      <ListGroup.Item variant={completed ? "success" : "warning"}>
        <Row className='align-items-center'>
          <Col lg={10} sm={9}>
            <div className='d-flex'>
              <Form.Check
                type='checkbox'
                className='d-block mr-3'
                checked={completed}
                onChange={onChangeStatus}
              />
              <p className='w-100 mb-0'>{title}</p>
            </div>
          </Col>
          <Col lg={2} sm={3} className='text-end'>
            <Button variant='danger' onClick={onDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
  );
};
