const express = require("express")
const ejs = require("ejs")
const app = express()

app.use("/css", express.static("css"))
app.use("/js", express.static("js"))

app.get("/", (req, res) => {
  ejs.renderFile("index.ejs", {}, null, (err, str) => {
    if(err != null) {
      console.log(err)
    }
    res.send(str) 
  }) 
})

app.get("/about/", (req, res) => {})
app.get("/contact/", (req, res) => {})
app.get("/connections/", (req, res) => {})
app.get("/newConnection/", (req, res) => {})
app.get("/savedConnections/", (req, res) => {})

app.listen(8000, () => console.log("listening on :8000"))
