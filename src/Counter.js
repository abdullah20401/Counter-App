import { useState } from "react";

function Counter({ title }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{title}</h1>
      <div className="grid">
        <button
          style={{ backgroundColor: "#ff7d81" }}
          className="margin"
          onClick={() => setCounter(counter - 1)}
        >
          <h1 style={{ backgroundColor: "#ff7d81" }}>-</h1>
        </button>
        <h3
          className={
            counter > 0 ? "color-green" : counter < 0 ? "color-red" : null
          }
        >
          <div className="count">{counter}</div>
        </h3>
        <button
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => setCounter(counter + 1)}
        >
          <h1 style={{ backgroundColor: "lightgreen" }}>+</h1>
        </button>
      </div>
      <button className="reset-button" onClick={() => setCounter(0)}>
        <p>Reset</p>
      </button>
    </>
  );
}

export default Counter;
