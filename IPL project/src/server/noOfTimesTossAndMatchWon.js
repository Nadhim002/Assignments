// Find the number of times each team won the toss and also won the match

const fs = require('fs');

function noOfTimesTossAndMatchWon(path , fileNameToSave ){

  const matchData = JSON.parse( fs.readFileSync( path ,'utf-8' ) ) 


    outputObject = matchData.reduce( function(acc ,match){

      if (match["toss_winner"] === match["winner"] ){

        acc[ match["winner"]  ] = ( acc[ match["winner"] ] ?? 0 ) + 1 

      }

      return acc

    } ,
    {}
   )



    console.log( outputObject )

    fs.writeFileSync( fileNameToSave , JSON.stringify(outputObject,null,2))
  

}

noOfTimesTossAndMatchWon("../data/matchesJsonData.json" , "../public/output/noOfTimesTossAndMatchWon.json")



