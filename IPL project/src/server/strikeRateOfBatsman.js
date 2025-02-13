const fs = require("fs");

function strikeRateOfBatsman(paths, fileNameToSave) {
  const matchesData = JSON.parse(fs.readFileSync(paths[0], "utf-8"));
  const deliveriesData = JSON.parse(fs.readFileSync(paths[1], "utf-8"));

  let seasonInfo = {};

  for (const match of matchesData) {
    const season = match["season"];
    if (!seasonInfo[season]) {
      seasonInfo[season] = {
        startId: parseInt(match["id"]),
        endId: parseInt(match["id"]),
      };
    } else {
      if (parseInt(match["id"]) < seasonInfo[season]["startId"]) {
        seasonInfo[season]["startId"] = parseInt(match["id"]);
      }
      if (parseInt(match["id"]) > seasonInfo[season]["endId"]) {
        seasonInfo[season]["endId"] = parseInt(match["id"]);
      }
    }
  }

  let playerStats = {};

  for (const delivery of deliveriesData) {
    if (delivery["wide_runs"] > 0) {
      continue;
    }

    let deliveryYear = null;

    for (const yearKey in seasonInfo) {
      if (
        parseInt(delivery["match_id"]) >= seasonInfo[yearKey]["startId"] &&
        parseInt(delivery["match_id"]) <= seasonInfo[yearKey]["endId"]
      ) {
        deliveryYear = yearKey;
        break;
      }
    }

    if (deliveryYear) {
      const batsman = delivery["batsman"];
      if (!playerStats[deliveryYear]) {
        playerStats[deliveryYear] = {};
      }
      if (!playerStats[deliveryYear][batsman]) {
        playerStats[deliveryYear][batsman] = {
          runsScored: 0,
          ballsFaced: 0,
        };
      }

      playerStats[deliveryYear][batsman]["runsScored"] += parseInt(delivery["batsman_runs"]);
      playerStats[deliveryYear][batsman]["ballsFaced"] += parseInt(delivery["noball_runs"]) > 0 ? 0 : 1;
    }
  }

  let strikeRates = {};

  for (const year in playerStats) {
    strikeRates[year] = {};
    for (const batsman in playerStats[year]) {
      strikeRates[year][batsman] = parseFloat(
        ((playerStats[year][batsman]["runsScored"] * 100) / playerStats[year][batsman]["ballsFaced"]).toFixed(2)
      );
    }

    // Sorting the players by strike rate for clarity in data
    strikeRates[year] = Object.fromEntries(
      Object.entries(strikeRates[year]).sort((a, b) => b[1] - a[1])
    );
  }

  fs.writeFileSync(fileNameToSave, JSON.stringify( strikeRates, null, 2));
}

strikeRateOfBatsman(
  ["../data/matchesJsonData.json", "../data/deliveriesJsonData.json"],
  "../public/output/strikeRateOfBatsman.json"
);
