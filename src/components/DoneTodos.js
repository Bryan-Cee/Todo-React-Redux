import React from "react";

const DoneTodos = ({ todos, onClick }) => {
  return (
    <div>
      <h3>Done Todos</h3>
      <ul>
        {todos.length > 0
          ? todos.map(todo => (
              <li key={todo.id}>
                <span>{todo.value}</span>
                <button onClick={() => onClick(todo.id)}>Delete</button>
              </li>
            ))
          : "You haven't completed any todos yet"}
      </ul>
    </div>
  );
};

export default DoneTodos;
