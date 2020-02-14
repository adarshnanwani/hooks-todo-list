import { useState } from "react";

export default (initialVal = "") => {
  const [val, setVal] = useState(initialVal);
  const updateVal = e => {
    setVal(e.target.value);
  };
  const resetVal = () => {
    setVal("");
  };
  return [val, updateVal, resetVal];
};
