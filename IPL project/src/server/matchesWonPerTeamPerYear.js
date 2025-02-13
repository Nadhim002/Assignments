// Number of matches won per team per year in IPL.

const fs = require("fs");

function matchesPerYear(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let outputObject = {};
  
  for (const match of matchData) {

    if (match["winner"] === "") {
      continue;
    }
    
    const winner = match["winner"];
    const season = String(match["season"]);
    
    if (!outputObject[winner]) {
      outputObject[winner] = {};
    }
    
    if (!outputObject[winner][season]) {
      outputObject[winner][season] = 1;
    } else {
      outputObject[winner][season] += 1;
    }
  }

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

matchesPerYear(
  "../data/matchesJsonData.json",
  "../public/output/matchesWonPerTeamPerYear.json"
);