// Extra runs conceded per team in the year 2016

const fs = require("fs");

function extraRunsConcededPerteam(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path[0], "utf-8"));

  let matchIdsForGivenYear = [];
  for (const match of matchData) {
    if (match["season"] === "2016") {
      matchIdsForGivenYear.push(match["id"]);
    }
  }

  const deliveryData = JSON.parse(fs.readFileSync(path[1], "utf-8"));

  let outputObject = {};
  for (const delivery of deliveryData) {
    if (matchIdsForGivenYear.includes(delivery["match_id"])) {
      const team = delivery["bowling_team"];
      if (!outputObject[team]) {
        outputObject[team] = 0;
      }
      outputObject[team] += parseInt(delivery["extra_runs"]);
    }
  }

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

extraRunsConcededPerteam(
  ["../data/matchesJsonData.json", "../data/deliveriesJsonData.json"],
  "../public/output/extraRunsConcededPerteam.json"
);
