const solutionObj = require('./solution.js');

solutionFunction = solutionObj.solutionFunction

testData = solutionObj.inventory 

solutionFunction("Bello")

solutionFunction({})

solutionFunction([])

solutionFunction(testData)

let testData_two = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    {
      id: 3,
      car_make:null ,
      car_year: 2010,
    }
]

solutionFunction(testData_two)

let testData_three = [
    {  car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    {
      car_make:null ,
      car_year: 2010,
    }
]

solutionFunction(testData_three)