import React from "react";
import { Search, Inbox, Home, Person } from "@material-ui/icons";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import AddVideo from "./AddVideo";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Link to="/" className="dashboard_option">
        <Home />
        <h5>Home</h5>
      </Link>
      <Link to="/search" className="dashboard_option">
        <Search />
        <h5>Discover</h5>
      </Link>
      <Link className="dashboard_option">
        <AddVideo />
      </Link>
      <Link to="/messages" className="dashboard_option">
        <Inbox />
        <h5>Inbox</h5>
      </Link>
      <Link to="/user" className="dashboard_option">
        <Person />
        <h5>Me</h5>
      </Link>
    </div>
  );
};

export default Dashboard;
