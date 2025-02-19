/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/

const _ = require("lodash")

function promiseGiver(number, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(number), time * 1000)
  })
}

const output = Promise.all([promiseGiver(10, 3), promiseGiver(20, 5)])
output
  .then((resolve) => console.log(_.sum(resolve)))
  .catch((err) => err.message)
