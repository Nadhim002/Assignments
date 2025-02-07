const fs = require('fs')

function csvToJsonConverter(path , fileNameToSave , encoding = 'utf-8'){

    console.log("Process Started")


    try {

        const csvDataString = fs.readFileSync( path , encoding  )

        console.log("Reading Sucessfully Completed")

        const arrayOfRows = csvDataString.split("\n").filter( (row) => row.trim() )

        const headerRow = arrayOfRows[0].split(",").map( (ele) => ele.trim() )
        const totalCols = headerRow.length

        const jsonArray = []

        for ( let row = 1 ; row < arrayOfRows.length ; row ++ ){           

            const currRow = arrayOfRows[row].split(",").map( (ele) => ele.trim() )
            rowObject = {}

            for ( let col = 0 ; col < totalCols ; col ++) {

                rowObject[ headerRow[col] ] =  
            }

            jsonArray.push( rowObject )
        }

        console.log("Conversion Completed")


        fs.writeFileSync( fileNameToSave, JSON.stringify(jsonArray,null,2 ) )

        console.log("Writing Sucessfully Completed")

        console.log()

    } catch(err) {

        return err.message

    }

}


csvToJsonConverter("../data/matches.csv","../data/matchesJsonData.json")
csvToJsonConverter("../data/deliveries.csv","../data/deliveriesJsonData.json")
