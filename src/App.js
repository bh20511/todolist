import React, { useState } from "react";
import Todolist from "./Todolist.js";

const App = () => {
  const [choice, setChoice] = useState(1);
  return (
    //  {choice === 1 ? <Todolist/> :""}
    <Todolist />
  );
};

export default App;
