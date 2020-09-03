import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Hooks
      </NavLink>
      |<NavLink to="router">Router Dom</NavLink>|
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};

export default Header;
