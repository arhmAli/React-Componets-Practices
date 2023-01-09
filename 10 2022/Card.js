import {useState} from 'react'

import cardItem from 'utilities'
const Card=()=>{

return (
  cardItem.map((item,ind)=>(
  <cardItem 
   key={item.name}
   color={item[ind]}
    />
  ))
)
}
export default 'Card'
