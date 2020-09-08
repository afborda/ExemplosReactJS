import React, { useEffect, useState } from "react";
import ConsumingHook from "./CustomHooks/ConsumingHook";
import Product from "./Product";
import ResultContextData from "./ResultContextData";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import UseReducer from "./useReducer";
import { Helmet } from "react-helmet";
import "./style.css";

const ReactHooks = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productLocal = window.localStorage.getItem("produto");
    if (productLocal !== null) setProduct(productLocal);
  }, []);

  useEffect(() => {
    if (product !== null) window.localStorage.setItem("produto", product);
  }, [product]);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <>
      <Helmet>
        <title> ExempleJS | ReactJS</title>
        <meta name="description" content="Essa é a pagina de Hooks" />
      </Helmet>
      <div style={{ border: "1px solid red" }}>
        <h1>useEffect</h1>
        <h4>Preferencia: {product} </h4>

        <button onClick={handleClick} style={{ marginRight: "1rem" }}>
          notebook
        </button>
        <button onClick={handleClick}>Smartphone</button>
        <Product product={product} />
      </div>
      <div style={{ border: "1px solid blue" }}>
        <UseRef />
      </div>
      <div style={{ border: "1px solid green" }}>
        <UseMemo />
      </div>
      <div style={{ border: "1px solid yellow" }}>
        <ResultContextData />
      </div>
      <div style={{ border: "1px solid red" }}>
        <ConsumingHook />
      </div>
      <div style={{ border: "1px solid black" }}>
        <UseReducer />
      </div>
    </>
  );
};

export default ReactHooks;
