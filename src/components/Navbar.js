import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mb-3">
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Analytics
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
