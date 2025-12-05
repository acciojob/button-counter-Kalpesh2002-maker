import React, { useState } from "react";

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <p style={{ fontSize: "22px" }}>
        Button clicked {count} {count === 1 ? "time" : "times"}
      </p>

      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "2px solid black",
        }}
      >
        Click me
      </button>
    </div>
  );
}
