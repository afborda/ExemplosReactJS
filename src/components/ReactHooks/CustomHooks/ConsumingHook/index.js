import React, { useEffect } from "react";
import useFetch from "../UseFetch";
import useLocalStorage from "../useLocalStorage";

const ConsumingHook = () => {
  const [product, setProduct] = useLocalStorage("product", "");
  const { request, data, loading, error } = useFetch();

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/",
        {
          product,
        }
      );
    }
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <div>Carregando....</div>;
  if (data)
    return (
      <div>
        <h1>Consumindo Hook customizado</h1>

        <h3>Produto preferido: {product}</h3>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
        {data.map((product) => (
          <div key={product.id}>
            <h4>{product.nome}</h4>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default ConsumingHook;
