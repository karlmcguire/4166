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

let userProfiles = new Array()

app.get("/", (req, res) => {
  res.render("index", {
    user: userProfiles[req.session.profileId]
  })
})

app.get("/login", (req, res) => {
  if(!req.session.profileId) {
    req.session.profileId = (userProfiles.push(
      new UserProfile(
        UserDB.GetRandomUser()))) - 1
  }
  res.redirect("/connections")
})

app.get("/signOut", (req, res) => {
  userProfiles[req.session.profileId].emptyProfile()
  req.session.profileId = null
  res.redirect("/")
})

app.get("/about", (req, res) => {
  res.render("about", {
    user: userProfiles[req.session.profileId]
  })
})

app.get("/contact", (req, res) => {
  res.render("contact", {
    user: userProfiles[req.session.profileId]
  }) 
})

app.get("/connections", (req, res) => {
  res.render("connections", {
    data: connection.getConnections(),
    user: userProfiles[req.session.profileId] 
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
    user: userProfiles[req.session.profileId]
  })
})

app.get("/connection/:id/add/:rsvp", (req, res) => {
  const user = userProfiles[req.session.profileId]
  if(user) {
    user.addConnection(
      new UserConnection(
        connection.getConnection(req.params.id),
        req.params.rsvp)) 
  }
  res.redirect("/savedConnections")
})

app.get("/newConnection", (req, res) => {
  res.render("newConnection", {
    user: userProfiles[req.session.profileId]
  })
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
  const user = userProfiles[req.session.profileId]
  res.render("savedConnections", {
    data: Array.from(user.getConnections().values()),
    user: user 
  })
})

app.get("/deleteConnection/:id", (req, res) => {
  userProfiles[req.session.profileId].removeConnection(Number(req.params.id))
  res.redirect("/savedConnections") 
})

app.listen(8000, () => console.log("listening on :8000"))
