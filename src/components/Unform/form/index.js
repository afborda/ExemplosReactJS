import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

// import { Container } from './styles';

export default function InputCustom({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input ref={inputRef} {...rest} defaultValue={defaultValue} />

      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </div>
  );
}
