import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <h1>Som-base</h1>
      <Link to="/manager">
        <Button color="primary">
          <h2>Manager</h2>
          <h4>Sign in</h4>
        </Button>
      </Link>
      <Link to="/employee">
        <Button color="primary">
          <h2>Employee</h2>
          <h4>Sign in</h4>
        </Button>
      </Link>
    </div>
  );
};

export default Home;
