const http = require("http")
const { v4: uuid } = require("uuid")
const data = require("./data.js")

const PORT = 5000

const firstServer = http.createServer((req, res) => {

  if (req.method == "GET" && req.url == "/") {
    res.end("Server Working")
  }

  if (req.method == "GET" && req.url == "/html") {
    res.setHeader("Content-type", "text/html")
    res.end(data.htmlData)
  }

  if (req.method == "GET" && req.url == "/json") {
    res.setHeader("Content-type", "text/json")
    res.end(  JSON.stringify( data.jsonData ) )
  }

  if (req.method == "GET" && req.url == "/uuid") {
    res.setHeader("Content-type", "text/plain")
    res.end(  uuid() )
  }

  const urlArry = req.url.split("/")

  console.log( urlArry )

  if (req.method == "GET" && urlArry[1] == "status") {
    const responseCode = parseInt(urlArry[2])
    res.writeHead( responseCode )

    res.end(`Got response with ${responseCode} code`)
  }

  if (req.method == "GET" && urlArry[1] == "delay") {

    console.log("Delay Started")
    res.writeHead( 200 )


    const delayInSeconds = parseFloat(urlArry[2])

    function doThisAfterDelay() {

      res.writeHead(200, "Delay Over")
      res.end(`Got response with ${delayInSeconds}'s delay`)

    }

    setTimeout(doThisAfterDelay, delayInSeconds * 1000)
  }


})

firstServer.listen(PORT, () => {
  console.log(`Server working on http://localhost:${PORT}`)
})
