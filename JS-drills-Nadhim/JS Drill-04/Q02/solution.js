// Do NOT use .map, to complete this function.
// How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
// Return the new array.

function map(elements, cb) {

    const outputArr = [] ; 

    for (let i= 0 ; i < elements.length ; i ++ ){
        outputArr.push( cb(elements[i]) ) 
    }
    return outputArr 
  }

const items = [1, 2, 3, 4, 5];

const callBackSquareIt = (ele) => ele*ele

console.log(map(items,callBackSquareIt))



