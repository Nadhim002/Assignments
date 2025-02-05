const solutionObj = require('./solution.js');

const invokeLimitter = solutionObj.limitFunctionCallCount( ()=> 'heloo', 3 ) 


console.log(  invokeLimitter())
console.log(  invokeLimitter())
console.log(  invokeLimitter())

console.log(  invokeLimitter())