// Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
// http://underscorejs.org/#mapObject

function mapObject(obj, cb) {

    let outputObj = {}

    for (let key in obj){
        outputObj[key] = cb(obj[key])
    }

    return outputObj
  
  }

function callbackRemoveNumber(value){
    if ( typeof value == "number" ) {   
        return "Remove Number"
    }

    return value
}


const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham"  };

module.exports = {testObject , mapObject , callbackRemoveNumber }