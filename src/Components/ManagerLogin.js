import React from "react";
import { Link } from "react-router-dom";

function ManagerLogin(props) {
  return (
    <div>
      <h3>Manager login:</h3>
      <form>
        <label>
          Username:
          <input type="text" placeholder="username..." />
        </label>
        <label>
          Password:
          <input type="text" placeholder="password..." />
        </label>
        <Link to="/manager">
          <input onClick={props.submit} type="submit" />
        </Link>
      </form>
    </div>
  );
}

export default ManagerLogin;
