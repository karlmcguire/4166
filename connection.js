const mongoose = require("mongoose")

const connectionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  details: String,
  about: String,
  going: Number
})

const Connection = mongoose.model("connection", connectionSchema)

module.exports.addConnection = (name, title, details, about, going) => {
  Connection.countDocuments({}).exec().then((id) => {
    Connection.create({
      id: id,
      name: name,
      title: title,
      details: details,
      about: about,
      going: going
    })
  })
}

module.exports.getConnections = () => Connection.find({}).exec()

module.exports.getConnection = (id) => Connection.findOne({id: id}).exec()
