
// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values


function values(obj) {

    if ( obj && typeof obj == "object" ){

        const valList = []

        for ( let key in obj){

            if ( obj.hasOwnProperty(key) && typeof obj[key] != "function" ){

            valList.push( obj[key] );

            }
        }

        return valList

    } else {
        return "Invalid input format"
    }



  }

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" ,hello : () => "Print Hello" };

module.exports = {values , testObject  }