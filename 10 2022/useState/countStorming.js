import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState({
    counter: 1
  });
  const realCount = count.counter;
  function handleChange() {
    setCount((prevCount) => {
      return { ...prevCount, counter: prevCount.counter + 3 };
    });
  }
  return (
    <div className="App">
      <h1>{realCount}</h1>
      <button onClick={handleChange}>Click to change</button>
    </div>
  );
}
