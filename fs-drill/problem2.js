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

const fileName = "./lorium.txt";

function fileReader(fileName, cb) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      console.log(err.message);
      return;
    } else {
      console.log("Data Working");

      cb(data);
    }
  });
}

function uppercaseConverter(data, cb) {
  let upperCaseData = data.toUpperCase();
  fs.writeFile("upperCaseData.txt", upperCaseData, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("upper case file writing completed");

    fs.writeFile("filenames.txt", "upperCaseData.txt", (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        cb();
      }
    });
  });
}

function lowerCaseConverter(cb) {
  fs.readFile("upperCaseData.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let arrOfSentences = data.split(".");

      arrOfSentences = arrOfSentences.map((sentence) =>
        sentence.trim().toLowerCase()
      );
      const sentenceBysentence = arrOfSentences.join("\n");

      fs.writeFile("lowerCaseDta.txt", sentenceBysentence, (err) => {
        if (err) {
          console.log(err);
        }
        cb();
      });

      fs.appendFile("filenames.txt", "\nlowerCaseDta.txt", (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

function sortAndSave(cb) {
  fs.readFile("filenames.txt", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      data.split("\n").forEach((fileName, index) => {
        fs.readFile(fileName, "utf-8", function (err, data) {
          data.split().sort().join("");

          fs.writeFile("Sorted" + fileName, data, function (err) {
            if (err) {
              console.log(err);
            }
          });

          fs.appendFile("filenames.txt", "\nSorted" + fileName, (err) => {
            if (err) {
              console.log(err);
            }
          });
        });
      });

      setTimeout(cb, 2000);
    }
  });
}

function deleteEverything(cb) {
  fs.readFile("filenames.txt", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      data.split("\n").forEach(function (file) {
        fs.unlink(file, function (err) {
          if (err) {
            console.log(err.message);
          }
        });
      });

      cb();
    }
  });
}

fileReader(fileName, (data) => 
  uppercaseConverter(data, () => 
    lowerCaseConverter(() => 
      sortAndSave(() => 
        deleteEverything(() => 
          console.log("Done and Dusted")
        )
      )
    )
  )
);