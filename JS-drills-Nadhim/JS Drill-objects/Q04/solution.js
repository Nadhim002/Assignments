// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs

function pairs(obj) {

    if ( typeof obj !== "object"){
        return "Invalid Input"
    }

    const outputPairs = []

    for (let key in obj){
        outputPairs.push([key,obj[key]])
    }

    return outputPairs

  }

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham"  };

module.exports = {pairs,testObject}