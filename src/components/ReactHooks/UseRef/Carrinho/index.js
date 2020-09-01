import React, { useRef, useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState(0);
  const [notification, setNotification] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCart(cart + 1);
    setNotification("Item adicionado com ao carrinho.");

    clearTimeout(timeoutRef.current);

    //tem que pegar do current (coisinha simples que é dificil de entender pq está dando erro)
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 1000);
  }

  return (
    <>
      <h1>Carrinho de Compras limpando setTimeout com UseRef</h1>
      <div>
        <p>{notification}</p>
        <button onClick={handleClick}>Adicionar Carrinho {cart}</button>
      </div>
    </>
  );
};

export default ShoppingCart;
