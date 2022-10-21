import { useState } from "react";

const App=()=> {
  const [count, setCount] = useState({
    counter: 1
  });
  const realCount = count.counter;
  function handleChange() {
    setCount((prevCount) => {
      return { ...prevCount, counter: prevCount.counter + 3 };
    });
    console.log(counter)
  }
  return (
    <div className="App">
      <h1>{realCount}</h1>
      <button onClick={handleChange}>Click to change</button>
    </div>
  );
}
export default (App)
