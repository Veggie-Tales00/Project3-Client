import React from "react";

function ManagerLogin() {
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
        <input type="submit" />
      </form>
    </div>
  );
}

export default ManagerLogin;
