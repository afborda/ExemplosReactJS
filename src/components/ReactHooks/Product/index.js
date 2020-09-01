import React, { useEffect, useState } from "react";

const Product = ({ product }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    //temos que por esse if pois a primeira vez que o componente é executado o valor de product é null
    if (product !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    //sempre quando o product for alterado o useEffect vai ser executado novamente
  }, [product]);

  //se for null não mostra o return
  if (dados === null) return null;
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>R${dados.preco}</p>
    </>
  );
};

export default Product;
