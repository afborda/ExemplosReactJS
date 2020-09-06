import React from "react";
import Header from "./components/Header";
import { GlobalStorage } from "./components/ReactHooks/UseContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactHooks from "./components/ReactHooks";
import ReactRouter from "./components/ReactRouter";
import NotFound from "./components/ReactRouter/components/PageNotFound";
import Login from "./components/ReactRouter/components/Login";
import ProductRoute from "./components/ReactRouter/components/useParams";
import ProductDetails from "./components/ReactRouter/components/ProductDetails";
import ProductEvaluation from "./components/ReactRouter/components/ProductEvaluation";
import CustomizedProduct from "./components/ReactRouter/components/CustomizedProduct";

function App() {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ReactHooks />} />
            <Route path="login" element={<Login />} />
            <Route path="router" element={<ReactRouter />} />
            <Route
              path="router/productdetails/:id/*"
              element={<ProductRoute />}
            >
              <Route path="" element={<ProductDetails />} />
              <Route path="avaliacao" element={<ProductEvaluation />} />
              <Route path="customizado" element={<CustomizedProduct />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
}

export default App;
