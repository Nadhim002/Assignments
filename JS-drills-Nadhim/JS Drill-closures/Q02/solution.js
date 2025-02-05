// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned

function limitFunctionCallCount(cb, n) {

    if (typeof cb !== "function" || typeof n !=="number"){
        return "Invalid Input"
    }

    let invokeCount = 0 

    return function(){
        if (invokeCount < n){
            invokeCount++
            return cb()
        }
        else{
            return null
        }
    }
  }

  
module.exports = {limitFunctionCallCount }