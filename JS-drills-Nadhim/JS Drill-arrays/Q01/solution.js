// Do NOT use forEach to complete this function.
// Iterates over a list of elements, yielding each in turn to the `cb` function.
// This only needs to work with arrays.
// You should also pass the index into `cb` as the second argument
// based off http://underscorejs.org/#each

function each(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
}

const items = [1, 2, 3, 4, 5, 5];

const callBackSquareIt = (ele) => console.log(ele * ele);

const callBackUsingIndex = (ele, index) => console.log(index + " : " + ele);

module.exports = { items, each, callBackSquareIt, callBackUsingIndex };
