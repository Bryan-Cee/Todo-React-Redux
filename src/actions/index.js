import * as types from "../constants/actionTypes";

let nextTodoId = 0;
export const createTodo = value => ({
  type: types.CREATE_TODO,
  todo: { id: nextTodoId++, value, done: false }
});

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id
});
