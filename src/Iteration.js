import React, { useState } from "react";

const Iteration = () => {
  const [nums, setNums] = useState([
    { id: 1, num: "one" },
    { id: 2, num: "two" },
    { id: 3, num: "three" },
    { id: 4, num: "four" },
    { id: 5, num: "five" },
  ]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(6); //nextId를 6으로 세팅함

  const change = (e) => {
    setInput(e.target.value);
  };

  const click = (e) => {
    const nextNums = nums.concat({
      // 입력값을 넣은 새로운 배열을 만듬
      id: nextId,
      num: input,
    });

    setNextId(nextId + 1);
    setNums(nextNums);
    setInput("");
  };

  // 추가
  const remove = (id) => {
    const nextNums = nums.filter((n) => n.id !== id);

    console.log("id >" + id);
    setNums(nextNums);
  };

  //더블클릭하면 지움
  const numList = nums.map((n) => (
    <li key={n.id} onDoubleClick={() => remove(n.id)}>
      {n.num}
    </li>
  ));
  return (
    <div>
      <input value={input} onChange={change} />
      <button onClick={click}>추가</button>
      <ul>{numList}</ul>
    </div>
  );
};

export default Iteration;
