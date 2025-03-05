const http = require("http")
const fs = require("fs")
const { v4: uuid } = require("uuid")
const PORT = 5000

const firstServer = http.createServer((req, res) => {
  if (req.method != "GET") {
    res.end()
  }

  if (req.url == "/") {
    res.end("Server Working")
  }

  if (req.url == "/html") {

    res.setHeader("Content-type", "text/html")


    fs.readFile("./index.html", "utf-8", (err, data) => {
      if (err) {
        res.end(err.message)
      }

      res.end(data)
    })

  }

  if (req.url == "/json") {
    res.setHeader("Content-type", "text/json")
    fs.readFile("./jsonData.json", "utf-8", (err, data) => {
      if (err) {
        res.end(err.message)
      }

      res.end(data)
    })

  }

  if (req.url == "/uuid") {
    res.setHeader("Content-type", "text/plain")
    res.end( JSON.stringify({  uuid : `${uuid()}`}) )
  }

  const urlArry = req.url.split("/")

  if (urlArry[1] == "status") {
    const responseCode = parseInt(urlArry[2])
    res.writeHead(responseCode)

    res.end(`Got response with ${responseCode} code`)
  }

  if (urlArry[1] == "delay") {
  
    const delayInSeconds = parseFloat(urlArry[2])

    function doThisAfterDelay() {
      res.writeHead(200)
      res.end(`Got response with ${delayInSeconds}'s delay`)
    }

    setTimeout(doThisAfterDelay, delayInSeconds * 1000)


  }
})

firstServer.listen(PORT, () => {
  console.log(`Server working on http://localhost:${PORT}`)
})
