import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Links = () => {
  return (
    <nav>
      <Link to="/">
        <Button color="primary">
          <h2>Home</h2>
        </Button>
      </Link>
      <Link to="/manager">
        <Button color="primary">
          <h2>Manager</h2>
        </Button>
      </Link>
      <Link to="/employee">
        <Button color="primary">
          <h2>Employee</h2>
        </Button>
      </Link>
    </nav>
  );
};

export default Links;
