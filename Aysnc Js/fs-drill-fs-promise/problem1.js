/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
        
*/

const fsp = require("fs/promises")

function directoryCreator(folderName) {
  return fsp.mkdir(folderName)
}

function writeFile(fileName, content) {
  return fsp.writeFile(fileName, content)
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

        console.log(`${fileNameToCreate} has been Created `)
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
    filePromises.push(deleteFile(fileNameToDelete).then(
      () => console.log(`${fileNameToDelete} has been Deleted `) 
    ))
  }
  return Promise.all(filePromises).then(() => folderName)
}

const dirName = "randomJsonDir"

directoryCreator(dirName)
  .then(() => {
    return createRandomJsonFiles(dirName)
  })
  .then(([ folderName, noOfFilesCreated]) => {
    console.log("*******************************")
    return deleteEveryThing( folderName, noOfFilesCreated  )
  })
  .then(() => {
    console.log("*******************************")
    console.log("Done and Dusted")
  })
  .catch((err) => console.log(err.message))
