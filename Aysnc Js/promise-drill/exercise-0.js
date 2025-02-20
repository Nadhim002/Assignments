/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/

console.log("program Started")

function promiseGiver(timeInSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Program Complete"), timeInSeconds * 1000)
  })
}

const promise = promiseGiver(3)

console.log(promise)

console.log("Program in progress...")

promise.then((data) => console.log(data))
