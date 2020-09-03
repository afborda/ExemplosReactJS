import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={handleClick}>LOGIN</button>
    </div>
  );
};

export default Login;
