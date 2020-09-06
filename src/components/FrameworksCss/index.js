import React from "react";
import BootstrapComponent from "./Components/BootstrapComponent";
import BootstrapDefault from "./Components/BootstrapDefault";

const FrameworksCss = () => {
  return (
    <div>
      <h1>Exemplo Frameworks</h1>
      <div>
        <h1>Bootstrap Comum</h1>
        <BootstrapDefault />
      </div>
      <div>
        <h1>Bootstrap com React</h1>
        <BootstrapComponent />
      </div>
    </div>
  );
};

export default FrameworksCss;
