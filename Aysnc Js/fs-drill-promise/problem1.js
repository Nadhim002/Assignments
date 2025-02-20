/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
        
*/
const fs = require("fs")

function directoryCreator(dirName) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(dirName, function (err) {
      if (err) {
        reject(err)
      }
      resolve(`${dirName} Created Scucessfully`)
    })
  })
}

function createRandomJsonFiles(noOfFiles, dirName) {
  return new Promise(function (resolve, reject) {
    let noOfFilesCompleted = 0
    for (let filenumber = 1; filenumber < noOfFiles + 1; filenumber++) {
      fs.writeFile(
        dirName + "/" + filenumber + ".json",
        filenumber.toString(),
        function (err) {
          if (err) {
            reject(err)
          }

          noOfFilesCompleted++
          console.log(`  Created ${filenumber}.json file `)

          if (noOfFilesCompleted == noOfFiles) {
            resolve(`Sucessfully Created all Files`)
          }
        }
      )
    }
  })
}

function deleteRandomJsonFiles(noOfFiles, dirName) {
  return new Promise(function (resolve, reject) {
    let noOfFilesCompleted = 0
    for (let filenumber = 1; filenumber < noOfFiles + 1; filenumber++) {
      fs.unlink(dirName + "/" + filenumber + ".json", function (err) {
        if (err) {
          reject(err)
        } else {
          noOfFilesCompleted++
          console.log(`  Deleted ${filenumber}.json file `)
        }

        if (noOfFilesCompleted == noOfFiles) {
          resolve(`Sucessfully Deleted all Files`)
        }
      })
    }
  })
}

function deleteCreator(dirName) {
  return new Promise(function (resolve, reject) {
    fs.rmdir(dirName, function (err) {
      if (err) {
        reject(err)
      }
      resolve(`${dirName} Deleted Scucessfully`)
    })
  })
}

const dirName = "randomJsonDir"
const noOfFiles = 5

directoryCreator(dirName)
  .then((data) => {
    console.log(data)
    return createRandomJsonFiles(noOfFiles, dirName)
  })
  .then((data) => {
    console.log(data)
    return deleteRandomJsonFiles(noOfFiles, dirName)
  })
  .then((data) => {
    console.log(data)
    return deleteCreator(dirName)
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => console.log(err.message))
