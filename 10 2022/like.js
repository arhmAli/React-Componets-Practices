import 'React' from react;
import {useState} from 'react'

const like=()=>{
  const[like,setLike]=useState(0);
  
  const handleClick=()=>{
  setLike(like+1)
  }
  return(
  <h1>`YOUR FACEBOOK LIKES!${like}` </h1>
    
    <button onClick={handleClick()}>Like!</button>
  )
}
