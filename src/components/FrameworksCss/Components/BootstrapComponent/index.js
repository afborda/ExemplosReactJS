import React from "react";
import Card from "react-bootstrap/Card";

const BootstrapComponent = () => {
  return (
    <div>
      <h1>React Bootstrap Component</h1>
      <Card
        bg="dark"
        text="white"
        className="m-5"
        style={{ maxWidth: "18rem" }}
      >
        <Card.Header>Nootebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500,00</Card.Title>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, non
            culpa sit in amet natus placeat id accusamus voluptate voluptatibus
            modi distinctio esse ut. Rem, incidunt amet. Laboriosam, incidunt
            fuga!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BootstrapComponent;
