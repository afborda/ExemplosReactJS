import React from "react";
import ReactHooks from "./components/ReactHooks";
import { GlobalStorage } from "./components/ReactHooks/UseContext";
function App() {
  return (
    <>
      <h1>Abner Fonseca</h1>
      <GlobalStorage>
        <ReactHooks />
      </GlobalStorage>
    </>
  );
}

export default App;
