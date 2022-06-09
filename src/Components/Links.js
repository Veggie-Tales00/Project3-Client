import React from "react";
import { Link } from "react-router-dom";
import './css/Links.css'


const Links = () => {
  return (
    <nav>
      <Link to="/">
        <img src='./light.png' width="70" height="70" alt='home-icon' className="nav" />
      </Link>
    </nav>
  );
};

export default Links;
