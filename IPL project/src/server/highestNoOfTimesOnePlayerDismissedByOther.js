// Find the highest number of times one player has been dismissed by another player

const fs = require('fs');

function highestNoOfTimesOnePlayerDismissedByOther(path , fileNameToSave , playerName ){

  const deliveriesData = JSON.parse( fs.readFileSync( path ,'utf-8' ) ) 


  let mostDismisalStats = deliveriesData.reduce( 

    function( acc, delivery ){

        if (delivery["player_dismissed"] === playerName  && delivery["dismissal_kind"].toLowerCase() !== "run out".toLowerCase() ){

           if (  !acc[  delivery["bowler"]    ] ){
                acc[ delivery["bowler"] ] = 1
           } else {
            acc[ delivery["bowler"] ] += 1

           }

        }

      return acc 
    } , 
    
    {}

    )

    let mostDismissedBowler = "ZZZ"
    let mostDismisalCount = -1


    for ( let bowler in mostDismisalStats ){

        if ( mostDismisalStats[bowler] > mostDismisalCount ){

            mostDismisalCount = mostDismisalStats[bowler]
            mostDismissedBowler = bowler

        } else if (  mostDismisalStats[bowler] === mostDismisalCount &&  bowler < mostDismissedBowler  ){


            mostDismissedBowler = bowler;

        }

    }




    const outputObject = { [playerName] : { "Bowler" : mostDismissedBowler, "Count" : mostDismisalCount  } }

    fs.writeFileSync( fileNameToSave , JSON.stringify(outputObject,null,2))
  

}

highestNoOfTimesOnePlayerDismissedByOther("../data/deliveriesJsonData.json" , "../public/output/highestNoOfTimesOnePlayerDismissedByOther.json" , "DA Warner" )



