import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(1)
  const [dec,setdec]=useState(1)
  useEffect(()=>{
    dec===0?alert("You Lose ! Loser hahahahah"):null
  },[dec])
  return (
    <div className="App">
      <h1>{count}-{dec}</h1>
      <button onClick={()=>setCount(count+1)}>Click to change</button>
    <button onClick={()=>setdec(dec-1)}>Click</button>
    </div>
  );
}
