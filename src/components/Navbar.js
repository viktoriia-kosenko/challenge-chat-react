import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <h4 href="" className="brand-logo left">
          Chat box
        </h4>
        <ul className="right">
          <li>
            <Link to="/messages">All messages</Link>
          </li>
          <li>
            <Link to="/messages/latest">Latest</Link>
          </li>
          <li>
            <Link to="/messages/Search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
