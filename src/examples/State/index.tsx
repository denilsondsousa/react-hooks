import React, { useState } from "react";

const State: React.FC = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={increment}> Incrementar </button>
    </>
  );
};

export default State;
