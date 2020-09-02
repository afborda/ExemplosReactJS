import { useEffect, useState } from "react";

const useLocalStorage = (key, initial) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
