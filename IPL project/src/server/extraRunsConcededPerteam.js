// Extra runs conceded per team in the year 2016

const fs = require("fs");

function extraRunsConcededPerteam(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path[0], "utf-8"));

  let matchIdsForGivenYear = matchData.reduce(function (acc, row) {
    if (row["season"] === "2016") {
      acc.push(row["id"]);
    }
    return acc;
  }, []);

  const deliveryData = JSON.parse(fs.readFileSync(path[1], "utf-8"));

  let outputObject = deliveryData.reduce(function (acc, row) {
    if (matchIdsForGivenYear.includes(row["match_id"])) {
      acc[row["bowling_team"]] =
        (acc[row["bowling_team"]] ?? 0) + parseInt(row["extra_runs"]);
    }

    return acc;
  }, {});

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

extraRunsConcededPerteam(
  ["../data/matchesJsonData.json", "../data/deliveriesJsonData.json"],
  "../public/output/extraRunsConcededPerteam.json"
);
