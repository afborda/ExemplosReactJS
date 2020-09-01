import React, { useMemo, useState } from "react";

function operation() {
  let c;
  for (let i = 0; i < 10000000; i++) {
    c = i + i / 10;
  }
  return c;
}

function UseMemo() {
  const [tell, setTell] = useState(0);
  const temp = performance.now();
  const value = useMemo(() => operation(), []);
  console.log("Primeiro", value);
  console.log("Tempo total", performance.now() - temp);

  return (
    <>
      <h1>UseMemo</h1>

      <button onClick={() => setTell(tell + 1)}>{tell}</button>
    </>
  );
}

export default UseMemo;
