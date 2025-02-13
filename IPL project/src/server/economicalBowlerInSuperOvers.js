// Find the bowler with the best economy in super overs

const fs = require("fs");

function economicalBowlerInSuperOvers(path, fileNameToSave) {
  const deliveryData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let bowlerStats = {};
  for (let delivery of deliveryData) {
    if (delivery["is_super_over"] === "1") {
      if (!bowlerStats[delivery["bowler"]]) {
        bowlerStats[delivery["bowler"]] = { runs: 0, balls: 0 };
      }

      bowlerStats[delivery["bowler"]]["runs"] +=
        parseInt(delivery["total_runs"]) -
        parseInt(delivery["legbye_runs"]) -
        parseInt(delivery["bye_runs"]);

      if (
        !(parseInt(delivery["noball_runs"]) > 0) &&
        !(parseInt(delivery["wide_runs"]) > 0)
      ) {
        bowlerStats[delivery["bowler"]]["balls"] += 1;
      }
    }
  }

  let bowlerEconomy = {};
  for (const bowler in bowlerStats) {
    const stats = bowlerStats[bowler];
    bowlerEconomy[bowler] = parseFloat(
      ((stats["runs"] * 6) / stats["balls"]).toFixed(4)
    );
  }

  let bowlerEconomySorted =  Object.fromEntries( Object.entries( bowlerEconomy ).sort( (a,b) => a[1] - b[1] ) )

  let outputData = {};
  const firstBowler = Object.keys(bowlerEconomySorted)[0];
  outputData[firstBowler] = bowlerEconomySorted[firstBowler];

  fs.writeFileSync(
    fileNameToSave,
    JSON.stringify(outputData, null, 2)
  );
}

economicalBowlerInSuperOvers(
  "../data/deliveriesJsonData.json",
  "../public/output/economicalBowlerInSuperOvers.json"
);
