import React, { useState } from "react";

const Counter_1 = () => {
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("black");

  const enter = () => setMsg("please enter here");
  const leave = () => setMsg("please leave here");


  return (
    <div>
      <button style={{ color }} onClick={enter}>
        Enter
      </button>
      <button style={{ color }} onClick={leave}>
        Leave
      </button>
      <h2 style={{ color }}>{msg}</h2>
      <button style={{ color: "violet" }} onClick={() => setColor("violet")}>
        바이올렛
      </button>

      <button style={{ color: "orange" }} onClick={() => setColor("orange")}>
        오렌지
      </button>

      <button style={{ color: "olive" }} onClick={() => setColor("olive")}>
        올리브그린
      </button>
    </div>
  );
};

export default Counter_1;
