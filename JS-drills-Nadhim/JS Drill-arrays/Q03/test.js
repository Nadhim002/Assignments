const solutionObj = require('./solution.js');

console.log(solutionObj.reduce(solutionObj.items,solutionObj.callAdd,-15))

console.log("------------------------------------------")

console.log(solutionObj.reduce(solutionObj.items,solutionObj.callMulti))