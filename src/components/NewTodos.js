import React from "react";

const NewTodos = ({ todos, onClick}) => {
  return (
    <div>
      <h3>New Todos</h3>
      <ul>
        {todos.length > 0
          ? todos.map(todo => (
              <li key={todo.id}>
                <span>{todo.value}</span>
                <button onClick={() => onClick.done(todo.id)}>Done</button>
                <button onClick={() => onClick.delete(todo.id)}>Delete</button>
              </li>
            ))
          : "No new todos"}
      </ul>
    </div>
  );
};

export default NewTodos;
