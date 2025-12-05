import React, { useState } from "react";

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <p style={{ fontSize: "22px" }}>
        Button clicked {count} {count === 1 ? "times" : "times"}
      </p>

      <button
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}
