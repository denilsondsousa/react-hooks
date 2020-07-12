import React, { useState, useEffect } from "react";

const Effect: React.FC = () => {
  const [count, setCount] = useState(0);

  /** ComponentDidMount */
  // useEffect(() => {
  //   console.log("Mount");
  // }, []);

  /** ComponentDidUpdate */

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  /** ComponentDidUnmout */

  useEffect(() => {
    console.log("Mount");

    return () => {
      console.log("Unmount");
    };
  }, []);

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

export default Effect;
