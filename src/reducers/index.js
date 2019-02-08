import * as types from "../constants/actionTypes";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_TODO:
      let newState = { ...state };
      console.log(newState);
      newState.todos.push(action.todo);
      return newState;
    case types.COMPLETE_TODO:
      let todos = [...state.todos];
      todos.map(todo =>
        todo.id === action.id ? (todo.done = !todo.done) : todo
      );
      return { todos: [...todos] };
    case types.DELETE_TODO:
      let newList = [...state.todos];
      let result = newList.filter(c => c.id !== action.id);
      return { todos: [...result] };
    default:
      return state;
  }
};
