import React, { useState } from "react";
import { useContext } from "react";

const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [test, setTest] = useState({ name: "abner fonseca", job: "Dev" });

  return (
    <GlobalContext.Provider value={{ test, setTest }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(GlobalContext);

  const { test, setTest } = context;

  return { test, setTest };
};
