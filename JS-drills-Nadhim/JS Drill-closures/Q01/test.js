const solutionObj = require('./solution.js');

const counterFactory = solutionObj.counterFactory

const counterObj = counterFactory()

console.log( counterObj.counter )

console.log( counterObj.increment() )

console.log( counterObj.increment() )

console.log( counterObj.decremnt() )

console.log( counterObj.decremnt() )