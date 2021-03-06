import { useState } from "react";

export default (initialVal = false) => {
  const [value, setValue] = useState(initialVal);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
};
