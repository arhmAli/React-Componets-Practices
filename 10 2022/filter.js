// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//This example can be used in react too for filtering of some values in an array that are positive 
function positiveSum(arr) {
  let positive=[]
  arr.forEach((item)=>item>=0?positive.push(item):null)
  let sum=positive.reduce((a,b)=>a+b,0)
  return sum
  }
