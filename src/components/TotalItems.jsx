import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

export const TotalItems = () => {
  const [stateCounter, setStateCounter] = useState(false);

  const totalTodos = useSelector((state) => state.todos.length);

  useEffect(() => {
    setStateCounter(true);
  }, [totalTodos]);

  return (
    <CSSTransition in={stateCounter} timeout={500} className='counter'>
      <h4 className='mt-3'>
        Total ToDos: <CountUp end={totalTodos} />
      </h4>
    </CSSTransition>
  );
};
