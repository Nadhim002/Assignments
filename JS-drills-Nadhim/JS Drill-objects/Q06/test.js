const solutionObj = require('./solution.js');

const testObject = solutionObj.testObject
const defaultProps = solutionObj.defaultProps
const defaults = solutionObj.defaults




console.log(defaults({}))

console.log(defaults(testObject,defaultProps))

