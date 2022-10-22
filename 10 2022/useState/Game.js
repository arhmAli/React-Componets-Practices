import { useState } from "react";
import "./styles.css";
export default function App() {
  const [draw, setDraw] = useState(0, {
    value: [1]
  });
  let rand = ["rock", "paper", "scissors", "Shoot"];
  let here = Math.floor(Math.random() * rand.length);
  let here_1 = Math.floor(Math.random() * rand.length);

  function randomizer() {
    console.log(here);
    setDraw((draw.value = here));
  }
  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <h3>{`You got ${rand[here]} vs ${rand[here_1]}`}</h3>
      <button onClick={randomizer}>Click to draw</button>
    </div>
  );
}
