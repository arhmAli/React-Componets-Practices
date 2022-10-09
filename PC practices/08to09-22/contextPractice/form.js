import React,{useState} from 'react'

const Form=(props)=> {
    const [userInput,setUserInput]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userInput)
        props.onSearchSubmit(userInput)
    }
    return (
    <div>
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={userInput}
        onChange={e=>setUserInput(e.target.value)}
        name="userInput"
        />
    </form>
    </div>
  )
}
export default Form
