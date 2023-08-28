import React, { useState } from "react";

function Counter() {
  // Initialize state with initial value of 0
  const [count, setCount] = useState(0);

  // Define function to increment count using the callback syntax
  function increment() {
    // Using callback to ensure we work with the most up-to-date count
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;

