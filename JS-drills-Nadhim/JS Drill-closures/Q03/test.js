const solutionObj = require('./solution.js');

const cacheFunction = solutionObj.cacheFunction

const cacheFunctionTest = cacheFunction( (a,b) => a+b  )

console.log(cacheFunctionTest(5,6))
console.log(cacheFunctionTest(5,6))



