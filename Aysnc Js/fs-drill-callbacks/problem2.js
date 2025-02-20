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

function readFile(fileName, callback) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      return callback(err)
    }

    return callback(null, data)
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

function appendFile(fileName, content, callback) {
  fs.appendFile(fileName, "\n" + content, (err) => {
    if (err) {
      return callback(err)
    }

    return callback(null)
  })
}

function upperCaseConvertAndWrite(data, callback) {
  const upperCaseData = data.toUpperCase()
  writeFile("upperCaseData.txt", upperCaseData, (err) => {
    if (err) {
      return callback(err)
    }

    writeFile("fileNames.txt", "upperCaseData.txt", (err) => {
      if (err) {
        return callback(err)
      }
      return callback(null, "upperCaseData.txt")
    })
  })
}

function lowerCaseConvertAndSave(data, callback) {
  const lowerCaseData = data.toLowerCase()
  const sentecnes = lowerCaseData.split(" ")

  writeFile("lowerCaseData.txt", sentecnes.join("\n"), (err) => {
    if (err) {
      return callback(err)
    }

    appendFile("fileNames.txt", "lowerCaseData.txt", (err) => {
      if (err) {
        return callback(err)
      }

      return callback(null, "lowerCaseData.txt")
    })
  })
}

function sortAndSave(data, callback) {
  let sortedData = data.split("\n").sort().join("\n")

  writeFile("sortedData.txt", sortedData, (err) => {
    if (err) {
      return callback(err)
    }

    appendFile("fileNames.txt", "sortedData.txt", (err) => {
      if (err) {
        return callback(err)
      }

      return callback(null)
    })
  })
}

function deleteEverything(callback) {
  readFile("fileNames.txt", (err, data) => {
    if (err) {
      return callback(err)
    }

    const filesToDelete = data.split("\n")
    let noOfFilesDeleted = 0

    filesToDelete.forEach((file) => {
      fs.unlink(file, (err) => {
        if (err) {
          return callback(err)
        }

        noOfFilesDeleted++

        if (noOfFilesDeleted === filesToDelete.length) {
          fs.unlink("fileNames.txt", (err) => {
            if (err) {
              return callback(err)
            }

            callback(null)
          })
        }
      })
    })
  })
}

const FILE_NAME = "lorium.txt"

readFile(FILE_NAME, (err, data) => {
  if (err) {
    console.log(err.message) 
    return 
  }

  upperCaseConvertAndWrite(data, (err, upperCaseFileName) => {
    if (err) {
      console.log(err.message) 
      return 
    }

    readFile(upperCaseFileName, (err, upperCaseData) => {
      if (err) {
        console.log(err.message) 
        return 
      }
      lowerCaseConvertAndSave(upperCaseData, (err, lowerCaseFileName) => {
        if (err) {
          console.log(err.message) 
          return 
        }

        readFile(lowerCaseFileName, (err, lowerCaseData) => {
          if (err) {
            console.log(err.message) 
            return 
          }
          sortAndSave(lowerCaseData, (err) => {
            if (err) {
              console.log(err.message) 
              return 
            }
            deleteEverything((err) => {
              if (err) {
                console.log(err.message) 
                return 
              }
              console.log("All Operations Completed Sucessfully")
            })
          })
        })
      })
    })
  })
})
