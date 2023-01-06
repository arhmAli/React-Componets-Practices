//We often need to map over an array in react 
//For this purpose we use map 
//The typical example of mapping is given below
function digitize(n) {
  //code here
  //let here=parseFloat(n.toString().split('').reverse().join(''))*Math.sign(n)
  //let array= Array.from(String(here),Number)
  let here=(n.toString().split('').reverse().map(Number))
  
  return here
  }
//The above example takes in values of some numbers say 12345 and turns it into strings then reverse the order then maps over the strings and making them numbers and 
//array forming along the way
