const solutionObj = require('./solution.js');

solutionFunction = solutionObj.solutionFunction

testData = solutionObj.inventory 

console.log(solutionFunction("Bello"))

console.log(solutionFunction({}))

console.log(solutionFunction([]))

console.log(solutionFunction(testData))