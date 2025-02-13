// Find the number of times each team won the toss and also won the match

const fs = require("fs");

function noOfTimesTossAndMatchWon(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let outputObject = {};

  for (const match of matchData) {
    if (match["toss_winner"] === match["winner"]) {
      if (! outputObject[match["winner"]]) {
        outputObject[match["winner"]] = 1;
      } else {
        outputObject[match["winner"]] += 1;
      }
    }
  }

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

noOfTimesTossAndMatchWon(
  "../data/matchesJsonData.json",
  "../public/output/noOfTimesTossAndMatchWon.json"
);