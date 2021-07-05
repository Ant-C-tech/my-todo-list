import { createSlice } from "@reduxjs/toolkit";
var uniqid = require("uniqid");

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uniqid("todo-"),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const indexOfToggledTodo = state.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      const currentStateId = state[indexOfToggledTodo].completed;
      state[indexOfToggledTodo].completed = !currentStateId;
    },
    deleteTodo: (state, action) => {
      const indexOfDeletedTodo = state.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      state.splice(indexOfDeletedTodo, 1);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
