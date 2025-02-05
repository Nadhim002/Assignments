
// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test

function filter(elements, cb) {

  const ouputArr = []

  for (let i =0  ; i < elements.length ; i++ ){

    if ( cb(elements[i]) ){
      ouputArr.push(elements[i])
    }
  }

  return ouputArr
}

const items = [1, 2, 3, 4, 5];

const callEven = (ele) =>  ele%2 == 0

const callFalsy = (ele) =>  ele > 10 


module.exports = {items , filter , callEven ,callFalsy  }