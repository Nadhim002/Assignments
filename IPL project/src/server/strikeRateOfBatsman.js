// Find the strike rate of a batsman for each season

const fs = require("fs");
const { delimiter } = require("path");

function strikeRateOfBatsman(path, fileNameToSave, playerName) {
  const matchesData = JSON.parse(fs.readFileSync(path[0], "utf-8"));
  const deliveriesData = JSON.parse(fs.readFileSync(path[1], "utf-8"));

  // Made an Assumption that id's for a season will be continous .

  const seasonInfo = matchesData.reduce(function (acc, match) {
    if (!acc[match["season"]]) {
      acc[match["season"]] = {
        startId: parseInt(match["id"]),
        endId: parseInt(match["id"]),
      };
    }

    if (parseInt(match["season"]) < parseInt(acc[match["season"]]["startId"])) {
      acc[match["season"]]["endId"] = parseInt(match["id"]);
    }

    if (parseInt(match["season"]) > parseInt(acc[match["season"]]["endId"])) {
      acc[match["season"]]["endId"] = parseInt(match["id"]);
    }

    return acc;
  }, {});

  let playerStats = deliveriesData.reduce(function (acc, delivery) {
    if (delivery["wide_runs"] > 0) {
      return acc;
    }

    let deliveryYear;

    for (let yearKey in seasonInfo) {
      if (
        parseInt(delivery["match_id"]) >= seasonInfo[yearKey]["startId"] &&
        parseInt(delivery["match_id"]) <= seasonInfo[yearKey]["endId"]
      ) {
        deliveryYear = yearKey;
        break;
      }
    }

    if (!acc[deliveryYear]) {
      acc[deliveryYear] = {};
    }

    if (!acc[deliveryYear][delivery["batsman"]]) {
      acc[deliveryYear][delivery["batsman"]] = {
        runsScored: parseInt(delivery["batsman_runs"]),
        ballsFaced: parseInt(delivery["noball_runs"]) > 0 ? 0 : 1,
      };
    } else {
      acc[deliveryYear][delivery["batsman"]]["runsScored"] += parseInt(
        delivery["batsman_runs"]
      );
      acc[deliveryYear][delivery["batsman"]]["ballsFaced"] +=
        parseInt(delivery["noball_runs"]) > 0 ? 0 : 1;
    }

    return acc;
  }, {});

  for (let year in playerStats) {
    for (let player in playerStats[year]) {
      playerStats[year][player] = parseFloat(
        (
          (playerStats[year][player]["runsScored"] * 100) /
          playerStats[year][player]["ballsFaced"]
        ).toFixed(2)
      );
    }

    // Sorting the players upon the Strike rate for more Clarity in Data
    playerStats[year] = Object.fromEntries(
      Object.entries(playerStats[year]).sort((a, b) => b[1] - a[1])
    );
  }

  fs.writeFileSync(fileNameToSave, JSON.stringify(playerStats, null, 1));
}

strikeRateOfBatsman(
  ["../data/matchesJsonData.json", "../data/deliveriesJsonData.json"],
  "../public/output/strikeRateOfBatsman.json",
  "DA Warner"
);
