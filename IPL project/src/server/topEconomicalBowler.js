// Top 10 economical bowlers in the year 2015

const fs = require("fs");

function topEconomicalBowler(paths, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(paths[0], "utf-8"));
  const deliveryData = JSON.parse(fs.readFileSync(paths[1], "utf-8"));

  let matchIdsForGivenYear = [];

  for (const row of matchData) {
    if (row["season"] === "2015") {
      matchIdsForGivenYear.push(row["id"]);
    }
  }

  let bowlerStats = {};

  for (const delivery of deliveryData) {
    if (matchIdsForGivenYear.includes(delivery["match_id"])) {
      const bowler = delivery["bowler"];
      if (!bowlerStats[bowler]) {
        bowlerStats[bowler] = { runs: 0, balls: 0 };
      }

      bowlerStats[bowler]["runs"] +=
        parseInt(delivery["total_runs"]) -
        parseInt(delivery["legbye_runs"]) -
        parseInt(delivery["bye_runs"]);

      if (
        !(parseInt(delivery["noball_runs"]) > 0) &&
        !(parseInt(delivery["wide_runs"]) > 0)
      ) {
        bowlerStats[bowler]["balls"] += 1;
      }
    }
  }

  let bowlerEconomy = {};

  for (const [bowler, stats] of Object.entries(bowlerStats)) {
    bowlerEconomy[bowler] = parseFloat(
      ((stats["runs"] * 6) / stats["balls"]).toFixed(4)
    );
  }

  let bowlerEconomySorted = Object.fromEntries(
    Object.entries(bowlerEconomy).sort((a, b) => a[1] - b[1])
  );

  let outputData = Object.fromEntries(
    Object.entries(bowlerEconomySorted).slice(0, 10)
  );

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputData, null, 2));
}

topEconomicalBowler(
  ["../data/matchesJsonData.json", "../data/deliveriesJsonData.json"],
  "../public/output/topEconomicalBowler.json"
);

