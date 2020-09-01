import React from "react";
import { useTest } from "../UseContext";

const ResultContextData = () => {
  const { test } = useTest();

  return (
    <div>
      <h1>UseContext global:{test.name} </h1>
    </div>
  );
};

export default ResultContextData;
