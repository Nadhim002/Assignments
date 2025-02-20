/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
        
*/

const fs = require("fs")

function createDirectory(dirName, cb) {
  fs.mkdir(dirName, function (err) {
    if (err) {
      console.log(err.message)
      return
    }

    console.log(` created Directory ${dirName} `)

    cb()
  })
}

function createRandomJson(dirName, arrOfJson, cb) {
  arrOfJson.forEach((element) => {
    fs.writeFile(dirName + "/" + element, element, function (err) {
      if (err) {
        console.log(err.message)
      } else {
        console.log(` created file ${element} `)
      }
    })
  })

  cb()
}

function deleteRandomJson(dirName, arrOfJson, cb) {
  arrOfJson.forEach((element) => {
    fs.unlink(dirName + "/" + element, function (err) {
      if (err) {
        console.log(err.message)
      } else {
        console.log(` deleted file ${element}`)
      }
    })
  })

  cb()
}

function removeDirectory(dirName, cb) {
  fs.rmdir(dirName, function (err) {
    if (err) {
      console.log(err.message)
    }
  })

  cb()
}

const dirName = "./random-file"
const arrOfJson = ["1.json", "2.json", "3.json"]

createDirectory(dirName, function () {
  createRandomJson(dirName, arrOfJson, function () {
    deleteRandomJson(dirName, arrOfJson, function () {
      removeDirectory(dirName, function () {
        console.log("All files created and deleted successfully!")
      })
    })
  })
})
