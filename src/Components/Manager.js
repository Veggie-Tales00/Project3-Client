import "./css/Manager.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Manager = () => {
  return (
    <div>
      <h2>Manager</h2>
      <Link to="/managerWine">
        <Button>
          <h3>Manage Wine</h3>
        </Button>
      </Link>
      <Link to="/manager/dish">
        <Button>
          <h3>Manage Dish</h3>
        </Button>
      </Link>
    </div>
  );
};

export default Manager;
