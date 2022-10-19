import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0, {
    counter: "hello"
  });
  return (
    <div className="App">
      <h1>The count is:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
