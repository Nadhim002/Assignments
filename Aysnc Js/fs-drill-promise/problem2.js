/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
        
*/

const fs = require("fs")
const lipsumFileName = "lorium.txt"
const fileNameStorage = "filenames.txt"

function fileReader(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function fileWriter(fileName, content) {
  return new Promise(function (resolve, reject) {
    if (typeof content !== "string") {
      reject("Invaild File Content Type")
    }

    fs.writeFile(fileName, content, "utf-8", function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(`${fileName} has been written scucessfully`)
      }
    })
  })
}

function fileAppender(fileName, content) {
  return new Promise(function (resolve, reject) {
    if (typeof content !== "string") {
      reject("Invaild File Content Type")
    }

    fs.appendFile(fileName, content, "utf-8", function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(`${fileName} has been Appended scucessfully`)
      }
    })
  })
}

function fileRemover(fileName) {
  return new Promise((resolve, reject) => {
    fs.unlink(fileName, (err) => {
      if (err) {
        reject(err)
      }

      resolve(`${fileName} Removed Sucessfully`)
    })
  })
}

function convertToUpperCaseAndWrite(fileName, content) {
  return Promise.allSettled([
    fileWriter(fileName, content.toUpperCase()),
    fileWriter(fileNameStorage, fileName),
  ])
}

function convertToLowerCaseAndSplitBySentence(data) {
  return data
    .match(/[^\.!\?]+[\.!\?]+/g)
    .map((ele) => ele.trim())
    .join("\n")
}

function convertToLowerCaseAndWrite(fileNameToRead, fileNameToWrite) {


  // Adding Space for seperation in reading
  const wirteFileName = fileAppender(fileNameStorage, " " + fileNameToWrite)

  return Promise.allSettled([readAndWritePromise, wirteFileName])
}

function sortData(data) {
  return data.split(" ").sort().join("")
}

function readSortAndWriteFromFileNames(fileNameToRead, fileNameToWrite) {
  const readAndWritePromise = new Promise((resolve, reject) => {
    fileReader(fileNameToRead)
      .then((data) => fileWriter(fileNameToWrite, sortData(data)))
      .then((data) => resolve(data))
      .catch((err) => reject(err))
  })

  const wirteFileName = fileAppender(fileNameStorage, " " + fileNameToWrite)

  return Promise.allSettled([readAndWritePromise, wirteFileName])
}

function deleteEveryThing(fileNameStorage) {

  return new Promise((resolve, reject) => {

    fileReader(fileNameStorage)
      .then((fileNameStorageContent) => {
        const fileNameArray = fileNameStorageContent.split(" ")

        let noOfFilesDeleted = 0

        fileNameArray.forEach((fileName) => {
          fileRemover(fileName)
            .then((message) => {
              noOfFilesDeleted++
              console.log(message)
              if (noOfFilesDeleted == fileNameArray.length) {

                fileRemover(fileNameStorage)
                  .then( () => resolve("Deleted Everything Sucessfully") )
                  .catch( (err) => reject(err) )
                
              }
            })
            .catch((err) => reject(err))
        })
      })
      .catch((err) => reject(err))
  })
}

fileReader(lipsumFileName)
  .then((data) => {
    return convertToUpperCaseAndWrite("upperCaseData.txt", data)
  })
  .then((data) => {
    console.log(data)
    return convertToLowerCaseAndWrite("upperCaseData.txt", "lowerCaseData.txt")
  })
  .then((data) => {
    console.log(data)
    return readSortAndWriteFromFileNames("lowerCaseData.txt", "sortedData.txt")
  })
  .then((data) => {
    // console.log(data)
    return deleteEveryThing(fileNameStorage)
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
