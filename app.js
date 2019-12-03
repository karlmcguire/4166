const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
const {check, validationResult} = require("express-validator")
const helmet = require("helmet")

const ConnectionDB = require("./connectionDb.js")
const UserDB = require("./userDb.js")
const UserConnectionDB = require("./userConnectionDb.js")
const UserProfile = require("./userProfile.js")
const security = require("./security.js")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blit", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => console.log("mongo connected"))

app.use(helmet())
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
  if(req.session.profileId != undefined) {
    UserDB.getUser(req.session.profileId).then((user) => {
      req.user = user
      req.userId = user.id
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
  if(req.user) {
    res.redirect("/savedConnections")
    return
  }
  res.render("login", {
    user: null,
    failed: req.query.failed
  })
})

app.post("/signIn", [
  check("username").isAlpha().isLength({min: 3}),
  check("password").isLength({min: 4})
], (req, res) => {
  if(req.user) {
    res.redirect("/savedConnections")
    return
  }
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    res.redirect("/login?failed=true")
    return
  }
  UserDB.findUser(req.body.username).then((user) => {
    // user doesn't exist with that username
    if(!user) {
      res.redirect("/login?failed=true")
      return
    }
    // user password is wrong
    if(security.genHash(user.salt, req.body.password) != user.hash) {
      res.redirect("/login?failed=true")
      return
    }
    // user credentials are correct and start the session (middleware will take
    // care of the rest)
    req.session.profileId = user.id 
    res.redirect("/savedConnections")
  })
})

app.get("/signOut", (req, res) => {
  if(!req.user) {
    res.redirect("/login")
    return
  }
  req.session.profileId = null
  req.user = null
  res.redirect("/")
})

app.get("/about", (req, res) => {
  res.render("about", {user: req.user})
})

app.get("/contact", (req, res) => {
  res.render("contact", {user: req.user}) 
})

app.get("/connections", (req, res) => {
  ConnectionDB.getConnections().then((data) => {
    res.render("connections", {
      data: data,
      user: req.user
    })
  })
})

app.get("/connection/:id", (req, res) => {
  ConnectionDB.getConnection(req.params.id).then((data) => {
    // connection request validation
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
  res.render("newConnection", {
    failed: req.query.failed,
    user: req.user
  })
})

app.post("/newConnection", [
  check("topic").isAlphanumeric().isLength({max: 300}),
  check("name").isLength({max: 300}),
  check("body").isLength({max: 2500}),
  check("location").isLength({max: 100}),
  check("when").isAfter()
], (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    res.redirect("/newConnection?failed=true")
    return
  }
  ConnectionDB.addConnection(
    req.body.topic, 
    req.body.name, 
    req.body.description, 
    req.body.location + " at " + req.body.when, 
    Math.floor(Math.random() * Math.floor(100)), 
  )
  res.redirect("/connections")
})

app.post("/update/:id", (req, res) => {  
  if(!req.user) {
    res.redirect("/login")
    return
  }
  UserConnectionDB.updateOrAddRSVP(req.params.id, req.userId, req.body.rsvp)
  res.redirect("/savedConnections")
})


app.get("/deleteConnection/:id", (req, res) => {
  if(!req.user) {
    res.redirect("/login")
    return
  }
  UserConnectionDB.deleteRSVP(req.params.id, req.userId)
  res.redirect("/savedConnections")
})

app.get("/savedConnections", (req, res) => {
  if(!req.user) {
    res.redirect("/login")
    return
  }
  UserConnectionDB.UserConnection.aggregate([
    { $match: {userId: req.userId} },
    { $lookup: {
        from: "connections",
        localField: "connectionId",
        foreignField: "id",
        as: "connection"
    } }
  ]).then((connections) => {
    res.render("savedConnections", {
      data: connections,
      user: req.user
    }) 
  })
})

app.listen(8000, () => console.log("listening on :8000"))
