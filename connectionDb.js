const mongoose = require("mongoose")

const connectionSchema = new mongoose.Schema({
  id: Number,
  ownerId: Number,
  topic: String,
  name: String,
  description: String,
  location: String,
  when: String,
  going: Number
})

const Connection = mongoose.model("connection", connectionSchema)

module.exports.addConnection = (connection) => {
  Connection.countDocuments({}).exec().then((id) => {
    Connection.create({
      id: id,
      ownerId: connection.ownerId,
      topic: connection.topic,
      name: connection.name,
      description: connection.description,
      location: connection.location,
      when: connection.when,
      going: connection.going
    })
  })
}

module.exports.updateConnection = (id, connection) => Connection.updateOne({id: id}, connection).exec()

module.exports.removeConnection = (id, ownerId) => Connection.deleteOne({id: id, ownerId: ownerId}).exec()

module.exports.getConnections = () => Connection.find({}).exec()

module.exports.getConnection = (id) => Connection.findOne({id: id}).exec()
