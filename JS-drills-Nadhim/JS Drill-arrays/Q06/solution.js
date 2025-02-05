  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

function flatten(elements) {

  let ouputArr = []

  for (let i = 0  ; i < elements.length ; i++ ){

    if ( !Array.isArray(elements[i])){
        ouputArr.push( elements[i] )
    } else{
      ouputArr = ouputArr.concat( flatten( elements[i] ) )
    }

  }

  return ouputArr

}

const nestedArray = [1, [2], [[3]], [[[4]]]];

const complexNestedArray = [
  1, 
  [2, [3, [4, [5, [6, [7, [8, [9, [10, "end"]]]]]]]]], 
  { key: "value" }, 
  [11, [12, [{ nestedObj: "ignore" }, 13], [14, [15, [16]]]]], 
  [[[[17, [18, [[19, [20, [21, [[22, [[23, [[[24, [25]]]]]]]]]]]]]]]]]
];




module.exports = {nestedArray ,  complexNestedArray  , flatten  }