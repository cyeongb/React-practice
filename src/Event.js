import React, { useState } from "react";

const Event = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const change = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const press = (e) => {
    if (e.key === "Enter") {
      click();
    }
  };
  const click = (e) => {
    alert(username + " :" + message);
    setForm("");
  };

  return (
    <div>
      <h1>Event Handling - function</h1>
      <input
        type="text"
        name="username"
        placeholder="이름을 입력하세요"
        value={username}
        onChange={change}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="메세지를 입력하세요"
        value={message}
        onChange={change}
      />
      <button onkeypress={press} onClick={click}>
        입력
      </button>
    </div>
  );
};

export default Event;
