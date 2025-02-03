
// Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.


function solutionFunction( arrayOfObjects  ){

   if  ( !Array.isArray(arrayOfObjects) ){
          console.log("Invalid data input format")
          return
   }

   if  ( arrayOfObjects.length == 0 ) {
          console.log("No Data is available")
          return
   }

   for ( let obj of arrayOfObjects ){

         if ( obj.isStudent && obj.country === "Australia" ){
            obj.name ? console.log(obj.name) : console.log("Name Unavailable") ; 
         }
   }
}


const arrayOfObjects = [
    { 
       id: 1, 
       name: 'Alice', 
       age: 30,
       email: 'alice@example.com',
       city: 'New York',
       country: 'USA',
       hobbies: ['reading', 'painting'],
       isStudent: false
    },
    { 
       id: 2, 
       name: 'Bob', 
       age: 25,
       email: 'bob@example.com',
       city: 'London',
       country: 'UK',
       hobbies: ['playing guitar', 'hiking'],
       isStudent: true
    },
    { 
       id: 3, 
       name: 'Charlie', 
       age: 35,
       email: 'charlie@example.com',
       city: 'Paris',
       country: 'France',
       hobbies: ['cooking', 'gardening'],
       isStudent: false
    },
    { 
       id: 4, 
       name: 'David', 
       age: 28,
       email: 'david@example.com',
       city: 'Berlin',
       country: 'Germany',
       hobbies: ['photography', 'traveling'],
       isStudent: true
    },
    { 
       id: 5, 
       name: 'Eve', 
       age: 32,
       email: 'eve@example.com',
       city: 'Sydney',
       country: 'Australia',
       hobbies: ['yoga', 'surfing'],
       isStudent: false
    },
    { 
       id: 6, 
       name: 'Frank', 
       age: 33,
       email: 'frank@example.com',
       city: 'Los Angeles',
       country: 'USA',
       hobbies: ['playing basketball', 'reading'],
       isStudent: true
    },
    { 
       id: 7, 
       name: 'Grace', 
       age: 29,
       email: 'grace@example.com',
       city: 'Toronto',
       country: 'Canada',
       hobbies: ['painting', 'running'],
       isStudent: false
    },
    { 
       id: 8, 
       name: 'Hannah', 
       age: 31,
       email: 'hannah@example.com',
       city: 'Melbourne',
       country: 'Australia',
       hobbies: ['writing', 'knitting'],
       isStudent: true
    },
    { 
       id: 9, 
       age: 27,
       email: 'ivy@example.com',
       city: 'Tokyo',
       country: 'Australia',
       hobbies: ['playing piano', 'cooking'],
       isStudent: true
    },
    { 
       id: 10, 
       name: null , 
       age: 34,
       city: 'Mumbai',
       country: 'Australia',
       hobbies: ['playing cricket', 'watching movies'],
       isStudent: true
    },
    { 
        id: 22, 
        name: ['Nadhim'], 
        age:20 ,
        email: null ,
        city: 'Erode',
        country: 'India',
        hobbies: ['playing cricket', 'watching movies'],
        isStudent: true
     },

    {

    }
    ,
    { 
      age: 30
   }
    ,

    { 
      age: 30,
      hobbies: []

   }
   ,
   { 
      age: 30,
      hobbies: null
   }
   ,
   { 
      age: 30,
      hobbies: [null]
   }

  ]

  
  module.exports = {solutionFunction , arrayOfObjects}
  

  