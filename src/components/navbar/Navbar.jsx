import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="About">
          <li>About</li>
        </Link>
        <Link to="Menu">
          <li>Menu</li>
        </Link>
        <Link to="/Gallery">
          <li>Gallery</li>
        </Link>
      </ul>
    </nav>
  );
}
