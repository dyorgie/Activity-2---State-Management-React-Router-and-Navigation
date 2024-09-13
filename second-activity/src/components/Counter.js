import "../components/Counter.css";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counterDiv">
        <h1>How many times have you visited us?</h1>
        <h1>{count}</h1>

        <button onClick={() => setCount((prev) => prev + 1)} id="buttonOne">
          Increment
        </button>

        <button onClick={() => setCount((prev) => prev - 1)} id="buttonTwo">
          Decrement
        </button>

        <button onClick={() => setCount(0)} id="buttonThree">
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
