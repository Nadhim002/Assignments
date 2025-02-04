const solutionObj = require('./solution.js');

solutionFunction = solutionObj.solutionFunction

testData = solutionObj.users 

console.log(solutionFunction("Bello"))

console.log(solutionFunction([]))

console.log(solutionFunction({}))


console.log(solutionFunction())

console.log(solutionFunction(testData))