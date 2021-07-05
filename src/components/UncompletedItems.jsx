import React from "react";
import { useSelector } from "react-redux";

export const UncompletedItems = () => {
  const uncompletedTodos = useSelector(state => state.todos.filter(todo =>  todo.completed === false ));
  return (
    <h4 className='mt-3'>You Have {uncompletedTodos.length} Uncompleted ToDos</h4>
  );
};
