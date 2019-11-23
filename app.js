const express = require("express")
const app = express()
const connection = require("./connection.js")
const bodyParser = require("body-parser")
const session = require("express-session")
const UserDB = require("./userDb.js")
const UserConnection = require("./userConnection.js")
const UserProfile = require("./userProfile.js")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blit", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => console.log("mongo connected"))

app.use(session({
  secret: "thesecret",
  resave: true,
  saveUninitialized: true
}))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use("/css", express.static("css"))
app.use("/js", express.static("js"))

app.use((req, res, next) => {
  if(req.session.profileId) {
    UserDB.getUser(req.session.profileId).then((user) => {
      req.user = user
      next()
    })
  } else {
    next()
  }
})

app.get("/", (req, res) => {
  res.render("index", {user: req.user})
})

app.get("/login", (req, res) => {
  if(!req.user) {
    UserDB.getUser(Math.floor(Math.random() * 4)).then((user) => {
      req.session.profileId = user.id 
      res.redirect("/connections")
    })
  } else {
    res.redirect("/")
  }
})

app.get("/signOut", (req, res) => {
  if(req.user) {
    req.session.profileId = null
    req.user = null
  }
  res.redirect("/")
})

app.get("/about", (req, res) => {
  res.render("about", {user: req.user})
})

app.get("/contact", (req, res) => {
  res.render("contact", {user: req.user}) 
})

app.get("/connections", (req, res) => {
  connection.getConnections().then((data) => {
    res.render("connections", {
      data: data,
      user: req.user
    })
  })
})

app.get("/connection/:id", (req, res) => {
  connection.getConnection(req.params.id).then((data) => {
    if(data == null) {
      res.redirect("/connections") 
      return
    }
    res.render("connection", {
      data: data,
      user: req.user
    })
  })
})

app.get("/newConnection", (req, res) => {
  res.render("newConnection", {user: user})
})

app.post("/update/:id", (req, res) => {
  const user = userProfiles[req.session.profileId]
  if(user != undefined) {
    user.addConnection(
      new UserConnection(
        connection.getConnection(req.params.id), 
        req.body.rsvp))
  }
  res.redirect("/savedConnections")
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
  if(user == undefined) {
    res.render("savedConnections", {data: [], user: undefined})
    return
  }
  res.render("savedConnections", {
    data: Array.from(user.getConnections().values()),
    user: user 
  })
})

app.get("/deleteConnection/:id", (req, res) => {
  const user = userProfiles[req.session.profileId]
  if(user != undefined) {
    user.removeConnection(Number(req.params.id))
  }
  res.redirect("/savedConnections") 
})

app.listen(8000, () => console.log("listening on :8000"))
