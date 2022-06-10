import "./css/ManagerLogin.css";
import React from "react";
import { Link } from "react-router-dom";

function ManagerLogin(props) {
  return (
    <div className="canvas">
      <h3 className="loginh3">Manager login:</h3>
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
          <input className="userLogin" onClick={props.submit} type="submit" value="Log In"/>
        </Link>
      </form>
    </div>
  );
}

export default ManagerLogin;
