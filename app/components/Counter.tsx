"use client";

import { useEffect, useState } from "react";

export default function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = end / (duration / 20);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}