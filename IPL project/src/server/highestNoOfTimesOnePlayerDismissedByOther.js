// Find the highest number of times one player has been dismissed by another player

const fs = require("fs");

function highestNoOfTimesOnePlayerDismissedByOther(path, fileNameToSave) {
  const deliveriesData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let mostDismisalStats = deliveriesData.reduce(
    function (acc, delivery) {
      if (
        delivery["player_dismissed"] != "" &&
        delivery["dismissal_kind"].toLowerCase() !== "run out".toLowerCase()
      ) {
        let playerName = delivery["batsman"];

        if (!acc.hasOwnProperty(playerName)) {
          acc[playerName] = {};
        }

        if (!acc[playerName].hasOwnProperty(delivery["bowler"])) {
          acc[playerName][delivery["bowler"]] = 1;
        } else {
          acc[playerName][delivery["bowler"]] += 1;
        }
      }
      return acc;
    },

    {}
  );

  let mostDismissedBastman = "ZZZ";
  let mostDismissedBowler = "ZZZ";
  let mostDismisalCount = -1;

  for (let batsman in mostDismisalStats) {
    for (let bowler in mostDismisalStats[batsman]) {
      if (mostDismisalStats[batsman][bowler] > mostDismisalCount) {
        mostDismisalCount = mostDismisalStats[batsman][bowler];
        mostDismissedBastman = batsman;
        mostDismissedBowler = bowler;
      }
    }
  }

  const outputOnject = {
    [mostDismissedBastman]: { [mostDismissedBowler]: mostDismisalCount },
  };

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputOnject, null, 2));
}

highestNoOfTimesOnePlayerDismissedByOther(
  "../data/deliveriesJsonData.json",
  "../public/output/highestNoOfTimesOnePlayerDismissedByOther.json",
  "DA Warner"
);
