
  // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  
function reduce(elements, cb, startingValue) {

  let index = 0 ;
  let accumlator ; 

  if ( startingValue === undefined ){
    accumlator = elements[0]
    index = 1
  } else{
    accumlator = startingValue
  }

  

  while( index < elements.length ){

    accumlator = cb(accumlator,elements[index])
    index++

  }

  return accumlator

  }

const items = [1, 2, 3, 4, 5];

const callAdd = (acc,curr) =>   ( acc + curr )

const callMulti = (acc,curr) =>   ( acc * curr )




module.exports = { items , reduce , callAdd ,callMulti }