import React from "react";
import Header from "./components/Header";
import { GlobalStorage } from "./components/ReactHooks/UseContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactHooks from "./components/ReactHooks";
import ReactRouter from "./components/ReactRouter";
import NotFound from "./components/ReactRouter/components/PageNotFound";
import Login from "./components/ReactRouter/components/Login";

function App() {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ReactHooks />} />
            <Route path="router" element={<ReactRouter />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
}

export default App;
