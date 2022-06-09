import React from "react";
import { Link } from "react-router-dom";

function ManagerLogin(props) {
  return (
    <div>
      <h3>Manager login:</h3>
      <form>
        <label>
          Username:
          <input type="username" placeholder="username..." />
        </label>
        <label>
          Password:
          <input type="password" placeholder="password..." />
        </label>
        <Link to="/manager">
          <input onClick={props.submit} type="submit" />
        </Link>
      </form>
    </div>
  );
}

export default ManagerLogin;
