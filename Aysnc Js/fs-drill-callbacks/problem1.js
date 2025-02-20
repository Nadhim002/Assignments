/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
        
*/

const fs = require("fs")

function createDirectory(dirName, callback) {
  fs.mkdir(dirName, function (err) {
    if (err) {
      return callback(err)
    }
    // console.log(` created Directory ${dirName} `)
    return callback(null, dirName)
  })
}

function writeFile(fileName, content, callback) {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      return callback(err)
    }

    return callback(null)
  })
}

function deleteFile(fileName, callback) {
  fs.unlink(fileName, (err) => {
    if (err) {
      return callback(err)
    }

    return callback(null)
  })
}

function createRandomJson(dirName, callback) {
  const randomNumber = parseInt(Math.random() * 10 + 1)
  let noOfFilesCreated = 0

  for (let fileNumber = 1; fileNumber < randomNumber + 1; fileNumber++) {
    const fileNameToCreate = dirName + "/" + String(fileNumber) + ".json"

    writeFile(fileNameToCreate, String(fileNameToCreate), (err) => {
      if (err) {
        return callback(err)
      }

      noOfFilesCreated++

      if (noOfFilesCreated == randomNumber) {
        return callback(null, dirName, noOfFilesCreated)
      }
    })
  }
}

function deleteRandomJson(dirName, noOfFilesCreated, callback) {
  let noOfFilesDeleted = 0

  for (let fileNumber = 1; fileNumber < noOfFilesCreated + 1; fileNumber++) {
    const fileNameToDelete = dirName + "/" + String(fileNumber) + ".json"

    deleteFile(fileNameToDelete, (err) => {
      if (err) {
        return callback(err)
      }

      noOfFilesDeleted++

      if (noOfFilesDeleted == noOfFilesCreated) {
        return callback(null, dirName)
      }
    })
  }
}

function removeDirectory(dirName, callback ) {
  fs.rmdir(dirName, function (err) {
    if (err) {
      return callback(err)
    }
  })
  callback(null)
}

const dirName = "./random-file"

createDirectory(dirName, (err, diectoryName) => {
  if (err) {
    console.log(err.message) 
    return 
  }

  createRandomJson(diectoryName, (err, diectoryName, noOfFilesCreated) => {
    if (err) {
      console.log(err.message) 
      return 
    }
    deleteRandomJson(diectoryName, noOfFilesCreated, (err, diectoryName) => {
      if (err) {
        console.log(err.message) 
        return 
      }
      removeDirectory(diectoryName, (err) => {
        if (err) {
          console.log(err.message) 
          return 
        }

        console.log("All Files Created and Deleted Sucessfully")
      })
    })
  })
})
