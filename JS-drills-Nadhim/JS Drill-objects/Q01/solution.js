// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys

function keys(obj) {

    if ( obj && typeof obj == "object" ){

        const keyList = []

        for ( let key in obj){

            keyList.push( key );

        }

        return keyList

    } else {
        return "Invalid input format"
    }



  }

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

module.exports = {keys , testObject }