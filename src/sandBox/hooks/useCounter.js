import { useState } from "react";

export default function useCounter(initialValue = 0, gaps = 0) { 

 const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + gaps);
  };

  const decrement = () => {
    setCounter((prev) => prev - gaps);
  };

  const reset = () => {
    setCounter(0)
  }

  return { counter, increment, decrement, reset };

}