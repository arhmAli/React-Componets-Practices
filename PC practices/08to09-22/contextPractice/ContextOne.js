
import React,{ useContext, useEffect ,useState } from 'react'
import ContextTwo from './ContextTwo'

 const ContextOne=()=> {
    let[state,setState]=useState("arham")
    
    const newName =()=>{
        let newName="ali"
        setState(
            state=newName)
        console.log(state)
    }
    useEffect(()=>{
        console.log("UPDATED STATE IN CONTEXT ONE")
    },[state])
    return (
    <>  
        <h1>{state}</h1>
        <button onClick={newName}>Click me</button>
        <ContextTwo/>
        
    </>
  )
}
export default ContextOne