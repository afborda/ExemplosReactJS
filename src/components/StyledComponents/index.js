import React, { useState } from "react";
import {
  H1,
  Text,
  StyledContainer,
  Position,
  Price,
  ColorRandomPrice,
  ButtomBuy,
} from "./Styled";

const StyledComponents = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div>
      <StyledContainer>
        <Position>
          <H1>Exemplo Styled Components</H1>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque
            ad possimus repellendus perferendis ab? Error, possimus facilis.
            Harum expedita eum qui magnam aut maxime iure natus necessitatibus
            sit tempore.
          </Text>
          <Price color="#84e">R$6000,00</Price>
        </Position>

        <Position>
          <H1>Exemplo Styled Components</H1>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque
            ad possimus repellendus perferendis ab? Error, possimus facilis.
            Harum expedita eum qui magnam aut maxime iure natus necessitatibus
            sit tempore.
          </Text>
          <ColorRandomPrice>R$6000,00</ColorRandomPrice>
        </Position>
      </StyledContainer>
      <ButtomBuy active={active} onClick={handleClick}>
        Clique Aqui!
      </ButtomBuy>
    </div>
  );
};

export default StyledComponents;
