import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <p>This app is all about managing your day to day actions</p>
        <Link to="/create">Create todo</Link>
      </div>
    );
  }
}
