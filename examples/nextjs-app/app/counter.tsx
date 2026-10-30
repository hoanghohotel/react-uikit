"use client";
import { useState } from "react";
import { Button } from "@react-uikit/core";
export function Counter() {
  const [count, setCount] = useState(0);
  return <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>;
}
