  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.v

function find(elements, cb) {

  for (let i =0  ; i < elements.length ; i++ ){

    if ( cb(elements[i]) ){
      return elements[i]
    }
  }
}

const items = [1, 2, 3, 4, 5];

const callEven = (ele) =>  ele%2 == 0

const callFalsy = (ele) => ""


module.exports = {items , find ,callEven ,callFalsy  }