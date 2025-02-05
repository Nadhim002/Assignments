// Should return a function that invokes `cb`.
// A cache (object) should be kept in closure scope.
// The cache should keep track of all arguments have been used to invoke this function.
// If the returned function is invoked with arguments that it has already seen
// then it should return the cached result and not invoke `cb` again.
// `cb` should only ever be invoked once for a given set of arguments.

function cacheFunction(cb) {  

  let cacheObj = {}

  return function(...args){

    let key = args

    if (cacheObj[key]){
        console.log("Returing from Cache")
    } else {
      console.log("Returing new Value")
      cacheObj[key] = cb(...args)
    }

    return cacheObj[key]
    
  }


}
  

module.exports = {cacheFunction }