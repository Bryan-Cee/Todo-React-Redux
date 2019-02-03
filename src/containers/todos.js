import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import * as actionsCreators from "../actions";
import DoneTodos from "../components/DoneTodos";
import NewTodos from "../components/NewTodos";

export class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleDone = e => {
    const { dispatch } = this.props;
    dispatch.completeTodo(e);
  };

  handleDelete = e => {
    const { dispatch } = this.props;
    dispatch.deleteTodo(e);
  };

  render() {
    const { dispatch, todos } = this.props;
    const onClick = { done: this.handleDone, delete: this.handleDelete };
    const newTodosList = todos.filter(todo => todo.done === false);
    const doneTodosList = todos.filter(todo => todo.done === true);

    let input;
    return (
      <div>
        <Link to="/">Home</Link>

        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch.createTodo(input.value);
            this.setState({
              todos: this.props.todos
            });
            input.value = "";
          }}
          autoComplete="off"
        >
          <input type="text" ref={node => (input = node)} />
          <button type="submit">Add todo</button>
        </form>
        <NewTodos todos={newTodosList} onClick={onClick} />
        <DoneTodos todos={doneTodosList} onClick={onClick.delete} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators(actionsCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
