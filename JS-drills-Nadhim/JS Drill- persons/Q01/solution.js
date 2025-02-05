//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function solutionFunction( arrayOfObjects  ) {
   
    if  ( !Array.isArray(arrayOfObjects) ){
        return "Invalid data input format"
    }

    if  ( arrayOfObjects.length == 0 ) {
        return "No Data is available"
    }

    const emailList = [] 

    arrayOfObjects.forEach(  (obj) => emailList.push( obj.email || "No Mail ID") )

    return emailList.length > 0 ? emailList : "No E-mail-ID's found" ;

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
       email: '',
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
       name: 'Ivy', 
       age: 27,
       email: 'ivy@example.com',
       city: 'Tokyo',
       country: 'Japan',
       hobbies: ['playing piano', 'cooking'],
       isStudent: false
    },
    { 
       id: 10, 
       name: 'Jack', 
       age: 34,
       city: 'Mumbai',
       country: 'India',
       hobbies: ['playing cricket', 'watching movies'],
       isStudent: true
    },
    { 
        id: 22, 
        name: 'Nadhim', 
        age:20 ,
        email: null ,
        city: 'Erode',
        country: 'India',
        hobbies: ['playing cricket', 'watching movies'],
        isStudent: true
     },

    {

    }

  ]

  
  module.exports = {solutionFunction , arrayOfObjects}
  

  