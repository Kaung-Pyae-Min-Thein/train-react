import { useState } from "react";
import { useSelector } from "react-redux";
import { Counter } from "./components/Counter";
import { Employee } from "./components/Employee";

const employee = {
  fname: "kaung",
  lastname: "pyae",
  age: "22"
};

function App() {
  const count = useSelector(state => state.counter.count);
  return (
    <div className="App">
      <h3>The Counter is: {count} </h3>
      <Counter />
    </div>
  );
}

export default App;
