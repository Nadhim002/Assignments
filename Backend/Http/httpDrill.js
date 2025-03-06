const http  =  require("http")
const fs  =  require("fs")
const { v4 : uuid }  =  require("uuid")
const PORT = 5000

const firstServer = http.createServer((req, res) => {


  const urlArry = req.url.split("/")


  if (req.method != "GET") {
    res.writeHead(200  , {} )
    res.end()
  } else   if (req.url == "/") {
    res.end("Server Working")
  } else  if (req.url == "/html") {

    fs.readFile("./index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead( 500 , {"Content-type": "text/plain" } )
        res.end(err.message)
      }

      res.writeHead( 200 , {"Content-type": "text/html" } )
      res.end(data)
    })

  } else   if (req.url == "/json") {
    res.setHeader("Content-type", "text/json")
    fs.readFile("./jsonData.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead( 500 , {"Content-type": "text/plain" } )
        res.end(err.message)
      }

      res.writeHead( 200 , {"Content-type": "text/json" } )
      res.end(data)
    })

  } else   if (req.url == "/uuid") {
    res.setHeader("Content-type", "text/plain")
    res.end( JSON.stringify({  uuid : `${uuid()}`}) )
  }   if (urlArry[1] == "status") {

    const responseCode = parseInt(urlArry[2])
    res.writeHead( responseCode , {"Content-type": "text/plain"} )

    res.end(`Got response with ${responseCode} code`)
  } else   if (urlArry[1] == "delay") {
  
    const delayInSeconds = parseFloat(urlArry[2])

    function doThisAfterDelay() {
      res.writeHead(200)
      res.end(`Got response with ${delayInSeconds}'s delay`)
    }

    setTimeout(doThisAfterDelay, delayInSeconds * 1000)
  } 

} 
 
)

firstServer.listen(PORT, () => {
  console.log(`Server working on http://localhost:${PORT}`)
})
