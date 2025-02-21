/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
        
*/

const { log } = require("console")
const fsp = require("fs/promises")

function directoryCreator(folderName) {
  return fsp.mkdir(folderName)
}

function writeFile(fileName, content) {
  return fsp.writeFile(fileName, content)
}

function appendFile(fileName, content) {
  return fsp.appendFile(fileName, content)
}

function deleteFile(fileName, content) {
  return fsp.unlink(fileName)
}

function createRandomJsonFiles(folderName) {
  const randomNumber = parseInt(Math.random() * 10 + 1)
  let noOfFilesCreated = 0
  const filePromises = []
  for (let fileNumber = 1; fileNumber < randomNumber + 1; fileNumber++) {
    const fileNameToCreate = folderName + "/" + String(fileNumber) + ".json"
    filePromises.push(
      writeFile(fileNameToCreate, String(fileNameToCreate)).then(() => {
        noOfFilesCreated++
      })
    )
  }
  return Promise.all(filePromises).then(() => [folderName, noOfFilesCreated])
}

function deleteEveryThing(folderName, noOfFilesCreated) {
  const filePromises = []
  for (let fileNumber = 1; fileNumber < noOfFilesCreated + 1; fileNumber++) {
    const fileNameToDelete = folderName + "/" + String(fileNumber) + ".json"
    filePromises.push(deleteFile(fileNameToDelete))
  }
  return Promise.all(filePromises).then(() => folderName)
}

const dirName = "randomJsonDir"

directoryCreator(dirName)
  .then(() => {
    return createRandomJsonFiles(dirName)
  })
  .then(([fileName, noOfFilesCreated]) => {
    console.log(fileName)
    console.log(noOfFilesCreated)
    return deleteEveryThing(fileName, noOfFilesCreated)
  })
  .then((data) => {
    console.log("Done and Dusted")
  })
  .catch((err) => console.log(err.message))
