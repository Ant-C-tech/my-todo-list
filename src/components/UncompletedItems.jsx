import React from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

export const UncompletedItems = () => {
  const uncompletedTodos = useSelector(state => state.todos.filter(todo =>  todo.completed === false ));
  return (
    <h4 className='mt-3'>You Have <CountUp end={uncompletedTodos.length}/> Uncompleted ToDos</h4>
  );
};
