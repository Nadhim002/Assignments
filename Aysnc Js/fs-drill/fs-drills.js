/*
    Folder structure:
        ├── problem1.js
        ├── problem2.js
        └── test
            ├── testProblem1.js
            └── testProblem2.js
*/

/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const fs = require("fs");

fs.mkdir("./test", function (err) {
  if (err) {
    console.log(err);
  }
});


fs.writeFile("./problem1.js", "", function (err) {
if (err) {
    console.log(err)
}
})

fs.writeFile("./problem2.js", "", function (err) {
    if (err) {
        console.log(err)
    }
    })

fs.writeFile("./test/testProblem1.js", "", function (err) {
        if (err) {
            console.log(err)
        }
        })


fs.writeFile("./test/testProblem2.js", "", function (err) {
    if (err) {
        console.log(err)
    }
    })

