import React from "react";

import { TodoList } from "./TodoList";
import { TotalItems } from "./TotalItems";
import { UncompletedItems } from "./UncompletedItems";

export const Content = () => {
  return (
    <React.Fragment>
      <hr className='mb-5'></hr>
      <UncompletedItems />
      <TodoList />
      <TotalItems />
    </React.Fragment>
  );
};
