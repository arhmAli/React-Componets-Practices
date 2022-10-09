import React,{ useContext, useEffect ,useState } from 'react'
import { myContext } from '../Context/Index'


 const ContextThree=()=> {
    const context=useContext(myContext)
    console.log(context)
  return (
    <div>
        {context}
    </div>
  )
}
export default ContextThree
