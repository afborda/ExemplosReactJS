import React from "react";
import { NavLink, useLocation, useParams, Outlet } from "react-router-dom";

const ProductRoute = () => {
  const params = useParams();
  const location = useLocation();

  //mostra parametro retonado na rota
  console.log(params);

  //mostra retorno do location
  console.log(location);

  //cole no navegador  essa URL http://localhost:3000/router/productdetails/notebook?q=verde&memoria=16
  // e veja o que mostra no console do navegador
  const search = new URLSearchParams(location.search);

  //passa como paramentro no GET a chave que você quer pegar
  console.log(search.get("q"));

  return (
    <div>
      <h1> Route Product Details UseParams </h1>
      <h3>Produto: {params.id}</h3>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductRoute;
