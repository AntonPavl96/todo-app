import React, { useState } from "react";

const Form = ({ setUpdate, update }) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1000", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    const data = await res.text();
    setUpdate(!update);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={text} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
