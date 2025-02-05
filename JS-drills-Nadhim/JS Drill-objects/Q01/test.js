const solutionObj = require('./solution.js');

const testObject = solutionObj.testObject
const keys = solutionObj.keys

console.log( keys(testObject) )

console.log( keys("Hi") )

