/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

console.log("Program started")

function promiseGiver(resolveTime, rejectTime) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve("Program Complete"), resolveTime*1000)
    setTimeout(() => reject("Program failure"), rejectTime*1000)
  })
}

const promise = promiseGiver(3, 2)

console.log(promise)

console.log("Program in progress...")

promise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
