// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.
// http://underscorejs.org/#invert

function invert(obj) {

  if ( typeof obj !== "object"){
  return "Invalid Input"
  }

  const outputObj = {} 

  for (let key in obj){

      outputObj[ obj[key].toString() ] = key
  }

  return outputObj

  }

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" , list : [1,2,3,4] };

module.exports = {invert,testObject}


