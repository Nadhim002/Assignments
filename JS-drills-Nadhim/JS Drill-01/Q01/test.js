const solutionObj = require('./solution.js');

solutionFunction = solutionObj.solutionFunction

testData = solutionObj.arrayOfObjects 

console.log( solutionFunction("Hello") ) 
console.log() 

console.log( solutionFunction([]) )
console.log() 

console.log( solutionFunction(testData) )
console.log() 

