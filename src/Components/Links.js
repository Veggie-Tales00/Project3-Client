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
    </nav>
  );
};

export default Links;
