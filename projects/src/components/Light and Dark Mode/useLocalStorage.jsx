import React, { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setvalue] = useState(() => {
    let currentValue;
    try {
      currentValue =
        JSON.parse(localStorage.getItem(key)) || String(defaultValue);
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setvalue];
}

export default useLocalStorage;
