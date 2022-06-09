import React from "react";
import { Link } from "react-router-dom";
import './css/Links.css'


const Links = () => {
  return (
    <nav>
      <h1>Som-Base</h1>
      <Link to="/">
        <img src='./light.png' width="70" height="70" alt='home-icon' className="icon" />
      </Link>
    </nav>
  );
};

export default Links;
