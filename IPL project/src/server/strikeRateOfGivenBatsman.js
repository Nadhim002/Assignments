// Find the strike rate of a batsman for each season

const fs = require("fs");

function strikeRateOfGivenBatsman(path, fileNameToSave, playerName) {
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

  let playerStats = deliveriesData.reduce(
    function (acc, delivery) {
      if (parseInt(delivery["wide_runs"]) > 0) {
        return acc;
      }

      if (delivery["batsman"] == playerName) {
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
          acc[deliveryYear] = {
            runsScored: parseInt(delivery["batsman_runs"]),
            ballsFaced: parseInt(delivery["noball_runs"]) > 0 ? 0 : 1,
          };
        } else {
          acc[deliveryYear]["runsScored"] += parseInt(delivery["batsman_runs"]);

          let ball = parseInt(delivery["noball_runs"]) > 0 ? 0 : 1;

          acc[deliveryYear]["ballsFaced"] += ball;
        }
      }

      return acc;
    },

    {}
  );

  for (let year in playerStats) {
    playerStats[year]["strikeRate"] = parseFloat(
      (
        (playerStats[year]["runsScored"] * 100) /
        playerStats[year]["ballsFaced"]
      ).toFixed(2)
    );
  }

  const outputObject = { [playerName]: playerStats };

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

strikeRateOfGivenBatsman(
  ["../data/matchesJsonData.json", "../data/deliveriesJsonData.json"],
  "../public/output/strikeRateOfGivenBatsman.json",
  "DA Warner"
);
