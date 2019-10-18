const express = require("express")
const app = express()
const connection = require("./connection.js")
const bodyParser = require("body-parser")

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use("/css", express.static("css"))
app.use("/js", express.static("js"))

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/contact", (req, res) => {
  res.render("contact") 
})

app.get("/connections", (req, res) => {
  res.render("connections", {data: connection.getConnections()})
})

app.get("/connection/:id", (req, res) => {
  const data = connection.getConnection(req.params.id)
  if(data == null) {
    res.redirect("/connections") 
    return
  }
  res.render("connection", {data: data})
})

app.get("/newConnection", (req, res) => {
  res.render("newConnection")
})

app.post("/newConnection", (req, res) => {
  connection.addConnection(
    req.body.name, 
    req.body.topic, 
    req.body.description, 
    req.body.location + " at " + req.body.when, 
    0, 
  )
  res.redirect("/connections")
})

app.get("/savedConnections", (req, res) => {
  res.render("savedConnections")
})

app.listen(8000, () => console.log("listening on :8000"))
