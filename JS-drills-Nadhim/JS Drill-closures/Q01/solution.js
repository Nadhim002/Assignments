// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

function counterFactory() {

    return {    

        counter : 0 ,

        increment : function(){ 
            return ++this.counter   
        } ,

        decremnt : function(){ 
            return --this.counter   
        } 
    }
  }


module.exports = {counterFactory }