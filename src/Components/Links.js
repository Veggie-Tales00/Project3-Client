import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/manager">
        <h2>Manager</h2>
      </Link>
      <Link to="/employee">
        <h2>Employee</h2>
      </Link>
    </nav>
  );
};

export default Links;
