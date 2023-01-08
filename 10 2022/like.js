import 'React' from react;
import {useState} from 'react'

const like=()=>{
  const[like,setLike]=useState(0);
  return(
  <h1>YOUR FACEBOOK LIKES!</h1>
    <button>Like!</button>
  )
}
