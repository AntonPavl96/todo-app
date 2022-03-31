import React, { useEffect, useState } from "react";
import { Item } from "..";

const List = ({ update }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [update]);

  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
