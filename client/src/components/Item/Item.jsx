import React from "react";

const Item = ({ todo }) => {
  return (
    <div>
      <h1>{todo.text}</h1>
    </div>
  );
};

export default Item;
