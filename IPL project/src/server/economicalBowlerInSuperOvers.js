// Find the bowler with the best economy in super overs

// is_super_over

const fs = require("fs");

function economicalBowlerInSuperOvers(path, fileNameToSave) {
  const deliveryData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let bowlerStats = deliveryData.reduce(function (acc, delivery) {
    if (delivery["is_super_over"] == "1") {
      if (!acc[delivery["bowler"]]) {
        acc[delivery["bowler"]] = { runs: 0, balls: 0 };
      }

      acc[delivery["bowler"]]["runs"] +=
        parseInt(delivery["total_runs"]) -
        parseInt(delivery["legbye_runs"]) -
        parseInt(delivery["bye_runs"]);

      if (
        !(parseInt(delivery["noball_runs"]) > 0) &&
        !(parseInt(delivery["wide_runs"]) > 0)
      ) {
        acc[delivery["bowler"]]["balls"] += 1;
      }
    }

    return acc;
  }, {});

  let bowlerEconomy = Object.fromEntries(
    Object.entries(bowlerStats).map(([bowler, stats]) => [
      bowler,
      parseFloat(((stats["runs"] * 6) / stats["balls"]).toFixed(4)),
    ])
  );

  let bowlerEconomySorted = Object.fromEntries(  Object.entries(bowlerEconomy).sort(
    (a,b) =>  a[1] - b[1]
  )
  )

  let outputData =  Object.fromEntries( Object.entries(   bowlerEconomySorted   ).slice(0,1) )

  fs.writeFileSync(
    fileNameToSave,
    JSON.stringify( outputData, null, 2)
  );
}

economicalBowlerInSuperOvers(
  "../data/deliveriesJsonData.json",
  "../public/output/economicalBowlerInSuperOvers.json"
);
