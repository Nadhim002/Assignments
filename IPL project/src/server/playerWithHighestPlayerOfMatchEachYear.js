// Find a player who has won the highest number of Player of the Match awards for each season

const { error, count } = require('console');
const fs = require('fs');

function playerWithHighestPlayerOfMatchEachYear(path , fileNameToSave ){

  const matchData = JSON.parse( fs.readFileSync( path ,'utf-8' ) ) 

  let manOfTheMatchData  = matchData.reduce( 
    function(acc, row ){

      if ( !acc[ row["season"] ] ){
        acc[ row["season"] ] = {}
      }

        acc[ row["season"] ][ row["player_of_match"]  ] =  ( acc[ row["season"] ][ String( row["player_of_match"] ) ] ?? 0 ) + 1 

        return acc 

    } 
    , 
     {}
    )

    let outputObject =  Object.fromEntries(Object.entries( manOfTheMatchData ).map( 

        function(keyPair){

          const manOfTheMatchCounts = keyPair[1]

          const playerWithHighestManOfTheMatch = { playerName : "ZZZZZZZZ" , count : -1 }

          for ( player in manOfTheMatchCounts ){

            if ( manOfTheMatchCounts[player] > playerWithHighestManOfTheMatch["count"]  ){

              playerWithHighestManOfTheMatch["count"] = manOfTheMatchCounts[player]
              playerWithHighestManOfTheMatch["playerName"] =  player

            } else if ( manOfTheMatchCounts[player] > playerWithHighestManOfTheMatch["count"] && playerWithHighestManOfTheMatch["playerName"] > player ){
              playerWithHighestManOfTheMatch["playerName"] =  player
            }

            }
            return [ keyPair[0] , playerWithHighestManOfTheMatch ]
          }
      )

    )

    



    fs.writeFileSync( fileNameToSave , JSON.stringify(outputObject,null,2))
  

}

playerWithHighestPlayerOfMatchEachYear("../data/matchesJsonData.json" , "../public/output/playerWithHighestPlayerOfMatchEachYear.json")



