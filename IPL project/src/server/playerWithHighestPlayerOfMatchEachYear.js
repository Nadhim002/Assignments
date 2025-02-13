// Find a player who has won the highest number of Player of the Match awards for each season
const fs = require("fs");

function playerWithHighestPlayerOfMatchEachYear(path, fileNameToSave) {
  const matchData = JSON.parse(fs.readFileSync(path, "utf-8"));

  let manOfTheMatchData = {};

  for (const row of matchData) {
    const season = row["season"];
    const player = row["player_of_match"];

    if (!manOfTheMatchData[season]) {
      manOfTheMatchData[season] = {};
    }

    if (!manOfTheMatchData[season][player]) {
      manOfTheMatchData[season][player] = 1;
    } else {
      manOfTheMatchData[season][player] += 1;
    }
  }

  let outputObject = {};

  for (const season in manOfTheMatchData) {
    let playerWithHighestManOfTheMatch = {
      playerName: "ZZZZZZZZ",
      count: -1,
    };

    for (const player in manOfTheMatchData[season]) {
      const count = manOfTheMatchData[season][player];

      if (count > playerWithHighestManOfTheMatch.count) {
        playerWithHighestManOfTheMatch.count = count;
        playerWithHighestManOfTheMatch.playerName = player;
      } else if (
        count === playerWithHighestManOfTheMatch.count &&
        player < playerWithHighestManOfTheMatch.playerName
      ) {
        playerWithHighestManOfTheMatch.playerName = player;
      }
    }

    outputObject[season] = playerWithHighestManOfTheMatch;
  }

  fs.writeFileSync(fileNameToSave, JSON.stringify(outputObject, null, 2));
}

playerWithHighestPlayerOfMatchEachYear(
  "../data/matchesJsonData.json",
  "../public/output/playerWithHighestPlayerOfMatchEachYear.json"
);
