const express = require("express")
const app = express()
const connection = require("./connection.js")
const bodyParser = require("body-parser")
const session = require("express-session")

const User = require("./user.js")
const UserDB = require("./userDb.js")
const UserConnection = require("./userConnection.js")
const UserProfile = require("./userProfile.js")

app.use(session({
  secret: "thesecret",
  resave: true,
  saveUninitialized: true
}))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use("/css", express.static("css"))
app.use("/js", express.static("js"))

app.get("/", (req, res) => {
  res.render("index", {user: req.session.user})
})

app.get("/login", (req, res) => {
  if(!req.session.user) {
    req.session.user = new UserProfile(UserDB.GetRandomUser())
  }
  res.redirect("/connections")
})

app.get("/signOut", (req, res) => {
  req.session.user = null
  res.redirect("/")
})

app.get("/about", (req, res) => {
  res.render("about", {user: req.session.user})
})

app.get("/contact", (req, res) => {
  res.render("contact", {user: req.session.user}) 
})

app.get("/connections", (req, res) => {
  res.render("connections", {
    data: connection.getConnections(),
    user: req.session.user
  })
})

app.get("/connection/:id", (req, res) => {
  const data = connection.getConnection(req.params.id)
  if(data == null) {
    res.redirect("/connections") 
    return
  }
  res.render("connection", {
    data: data,
    user: req.session.user
  })
})

app.get("/connection/:id/add/:rsvp", (req, res) => {
  if(req.session.user) {
    req.session.user.addConnection(
      new UserConnection(
        connection.getConnection(req.params.id),
        req.params.rsvp)) 
  }
  res.redirect("/savedConnections")
})

app.get("/newConnection", (req, res) => {
  res.render("newConnection", {user: req.session.user})
})

app.post("/newConnection", (req, res) => {
  connection.addConnection(
    req.body.name, 
    req.body.topic, 
    req.body.description, 
    req.body.location + " at " + req.body.when, 
    0, 
  )
  res.redirect("/connections", {user: req.session.user})
})

app.get("/savedConnections", (req, res) => {
  res.render("savedConnections", {
    data: req.session.user.connections,
    user: req.session.user
  })
})

app.listen(8000, () => console.log("listening on :8000"))
