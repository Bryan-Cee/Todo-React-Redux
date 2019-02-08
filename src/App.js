import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todos from "./containers/todos";
import About from "./components/About";
import Error from "./components/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/create" component={Todos} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
