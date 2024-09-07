import React, { useEffect, useState } from "react";

export default function useDelay(defaultValue, delayMillis, onChange) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    let timer = setTimeout(() => {
      onChange(value);
    }, delayMillis);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return [value, setValue];
}
