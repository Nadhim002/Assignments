const solutionObj = require('./solution.js');

solutionObj.each(solutionObj.items,solutionObj.callBackSquareIt)

console.log("----------------------------------")

solutionObj.each(solutionObj.items,solutionObj.callBackUsingIndex)  