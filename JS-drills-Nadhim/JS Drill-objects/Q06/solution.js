// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults

function defaults(obj, defaultProps) {

  if ( typeof obj !== "object" || typeof defaultProps !== "object"  ){
    return "Invalid Input"
  }


  for (let key in defaultProps ){

    if( typeof obj[key] === "undefined" ){
       obj[key] = defaultProps[key]
    }
  }

  return obj
}


const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" , list : undefined };
const defaultProps = {name : "nadhim" , list : [1,2,3] , newKey : "newer" }

module.exports = {defaults,testObject,defaultProps}
