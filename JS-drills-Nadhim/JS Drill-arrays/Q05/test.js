const solutionObj = require('./solution.js');


console.log( solutionObj.filter( solutionObj.items, solutionObj.callEven ) )
console.log("------------------------------------------")
console.log( solutionObj.filter( solutionObj.items, solutionObj.callFalsy ) )