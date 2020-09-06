import React from "react";

const BootstrapDefault = () => {
  return (
    <div>
      <h1>Mostra Card bootstrap Comum</h1>
      <div
        className="card bg-dark text-white m-5"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">Nootebok</div>
        <div className="card-body">
          <h5 className="card-title"> R$2500</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, non
            culpa sit in amet natus placeat id accusamus voluptate voluptatibus
            modi distinctio esse ut. Rem, incidunt amet. Laboriosam, incidunt
            fuga!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootstrapDefault;
