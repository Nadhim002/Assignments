/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
        
*/

const fsp = require("fs/promises")
const fileNameStorage = "fileNames.txt"

function readFile(fileName) {
  return fsp.readFile(fileName, "utf-8")
}

function writeFile(fileName, content) {
  return fsp.writeFile(fileName, content)
}

function appendFile(fileName, content) {
  return fsp.appendFile(fileName, content)
}

function deleteFile(fileName) {
  return fsp.unlink(fileName)
}

function convertToUpperCaseAndWrite(fileName, content) {
  return Promise.allSettled([
    writeFile(fileName, content.toUpperCase()),
    writeFile(fileNameStorage, fileName),
  ])
}

function convertToLowerCaseAndSplitBySentence(data) {
  return data
    .match(/[^\.!\?]+[\.!\?]+/g)
    .map((ele) => ele.trim())
    .join("\n")
}

function convertToLowerCaseAndWrite(fileNameToRead, fileNameToWrite) {
  const readAndWritePromise = readFile(fileNameToRead)
    .then((data) => convertToLowerCaseAndSplitBySentence(data) )
    .then((processedData) => writeFile(fileNameToWrite, processedData) )

  // Adding Space for seperation in reading
  const wirteFileName = appendFile(fileNameStorage, " " + fileNameToWrite)

  return Promise.allSettled([readAndWritePromise, wirteFileName])
}

function sortData(data) {
  return data.split(" ").sort().join("")
}

function readSortAndWriteFromFileNames(fileNameToRead, fileNameToWrite) {
  const readAndWritePromise = readFile(fileNameToRead).then((data) =>
    writeFile(fileNameToWrite, sortData(data))
  )

  const wirteFileName = appendFile(fileNameStorage, " " + fileNameToWrite)

  return Promise.allSettled([readAndWritePromise, wirteFileName])
}

function deleteEveryThing(fileNamesToDelete) {
  const deletePromisesToExecute = fileNamesToDelete.map((fileName) => {
    deleteFile(fileName)
  })
  return Promise.all(deletePromisesToExecute)
}

const loriumFileName = "lorium.txt"

readFile(loriumFileName)
  .then((data) => {
    console.log("lorium.txt reading is scucessfully")
    return convertToUpperCaseAndWrite("upperCaseData.txt", data)
  })
  .then(() => {
    console.log("upperCaseData.txt Created Sucesfully")
    return convertToLowerCaseAndWrite("upperCaseData.txt", "lowerCaseData.txt")
  })
  .then(() => {
    console.log("lowerCaseData.txt Created Sucesfully")
    readSortAndWriteFromFileNames("lowerCaseData.txt", "sortedTextData.txt")
  })
  .then(() => {
    console.log("sortedTextData.txt Created Sucesfully")
    return readFile(fileNameStorage)
  })
  .then((data) => {
    const fileNamesToDelete = data.split(" ")
    return deleteEveryThing(fileNamesToDelete)
  })
  .then(() => {
    console.log("Deleted Eveything !!! ")
  })
  .catch((err) => err.message)
