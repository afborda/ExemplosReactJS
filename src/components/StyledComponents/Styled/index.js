import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 25px;
  color: tomato;
`;

export const Text = styled.p`
  font-size: 20;
  color: green;
  border: 2px solid red;
`;

export const StyledContainer = styled.div`
  display: flex;
`;

export const Position = styled.div`
  flex: 1;
`;

export const Price = styled.p`
  background: ${({ color }) => color};
  color: white;
`;

export const ColorRandomPrice = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

export const ButtomBuy = styled.button`
  background: ${({ active }) => (active ? "#000" : "#fff")};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ active }) => (active ? "#fff" : "#000")};
`;
