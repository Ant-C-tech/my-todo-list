import React from "react";
import { useSelector } from "react-redux";

export const TotalItems = () => {
  const totalTodos = useSelector((state) => state.todos.length);
  return <h4 className='mt-3'>Total ToDos: {totalTodos}</h4>;
}
