import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Home from "./Home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/user">
            <h3>This is the user page</h3>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Dashboard />
      </Router>
    </div>
  );
};

export default App;
