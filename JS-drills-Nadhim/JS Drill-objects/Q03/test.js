const solutionObj = require('./solution.js');

const testObject = solutionObj.testObject
const mapObject = solutionObj.mapObject
const callbackRemoveNumber = solutionObj.callbackRemoveNumber


console.log(mapObject(testObject,callbackRemoveNumber))

