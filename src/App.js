import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user just logged in or the user was just logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/user">
            <h3 style={{ color: "white" }}>This is the user page</h3>
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
