// Number of matches played per year for all the years in IPL.

const fs = require("fs");

function matchesPerYear(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let outputObject = {};

  for (const match of matchData) {
    const season = match["season"];

    if (!outputObject[season]) {
      outputObject[season] = 1;
    } else {
      outputObject[season] += 1;
    }
  }

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

matchesPerYear(
  "../data/matchesJsonData.json",
  "../public/output/matchesPerYear.json"
);
