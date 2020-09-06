import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log("mostra quando mudou a rota!");
  }, [location]);
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
