// Number of matches won per team per year in IPL.

const fs = require("fs");

function matchesPerYear(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let outputObject = matchData.reduce(function (acc, row) {
    if (row["winner"] == "") {
      return acc;
    }

    if (!acc[row["winner"]]) {
      acc[row["winner"]] = {};
    }

    acc[row["winner"]][String(row["season"])] =
      (acc[row["winner"]][String(row["season"])] ?? 0) + 1;

    return acc;
  }, {});

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

matchesPerYear(
  "../data/matchesJsonData.json",
  "../public/output/matchesWonPerTeamPerYear.json"
);
