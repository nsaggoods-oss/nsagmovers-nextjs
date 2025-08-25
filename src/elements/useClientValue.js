// hooks/useClientValue.js
"use client";
import { useState, useEffect } from "react";

export default function useClientValue(factory, fallback = null) {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    setValue(factory());
  }, [factory]);

  return value;
}
