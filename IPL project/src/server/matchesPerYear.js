// Number of matches played per year for all the years in IPL.

const fs = require("fs");

function matchesPerYear(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let outputObject = matchData.reduce(
    function (acc, row) {
      acc[row["season"]] = (acc[String(row["season"])] ?? 0) + 1;

      return acc;
    },

    {}
  );

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

matchesPerYear(
  "../data/matchesJsonData.json",
  "../public/output/matchesPerYear.json"
);
