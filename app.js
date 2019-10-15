const express = require("express")
const app = express()

app.set("view engine", "ejs")

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
  res.render("connections")
})

app.get("/connection", (req, res) => {
  res.render("connection")
})

app.get("/newConnection", (req, res) => {
  res.render("newConnection")
})

app.get("/savedConnections", (req, res) => {
  res.render("savedConnections")
})

app.listen(8000, () => console.log("listening on :8000"))
