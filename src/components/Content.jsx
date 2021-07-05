import React from "react";

import { TodoList } from "./TodoList";
import { TotalItems } from "./TotalItems";
import { UncompletedItems } from "./UncompletedItems";

export const Content = () => {
  return (
    <>
      <hr className='mb-5'></hr>
      <UncompletedItems />
      <TodoList />
      <TotalItems />
    </>
  );
};
