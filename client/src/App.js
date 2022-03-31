import React, { useState } from "react";
import { Form, List } from "./components";

const App = () => {
  const [update, setUpdate] = useState(true);
  return (
    <div>
      <Form setUpdate={setUpdate} update={update} />
      <List update={update} />
    </div>
  );
};

export default App;
