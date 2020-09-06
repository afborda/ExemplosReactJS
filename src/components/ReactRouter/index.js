import React from "react";
import { Link } from "react-router-dom";

const ReactRouter = () => {
  return (
    <div>
      <h2>Router</h2>
      <Link to="productdetails/notebook"> Notebook</Link>
      <Link to="productdetails/smartphone"> Smartphone</Link>
    </div>
  );
};

export default ReactRouter;
