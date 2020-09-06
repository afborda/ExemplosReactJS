import React from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CustomizedProduct from "../CustomizedProduct";
import ProductDetails from "../ProductDetails";
import ProductEvaluation from "../ProductEvaluation";

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
      <Routes>
        <Route path="" element={<ProductDetails />} />
        <Route path="avaliacao" element={<ProductEvaluation />} />
        <Route path="customizado" element={<CustomizedProduct />} />
      </Routes>
    </div>
  );
};

export default ProductRoute;
