import React, { useEffect, useRef, useState } from "react";
import Carrinho from "./Carrinho";

const UseRef = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  useEffect(() => {});

  function handleClick() {
    setComments([...comments, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <>
      <h1>UseRef</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>

      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
      <Carrinho />
    </>
  );
};

export default UseRef;
