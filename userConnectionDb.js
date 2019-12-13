const mongoose = require("mongoose")

const userConnectionSchema = new mongoose.Schema({
  connectionId: Number,
  userId: Number,
  rsvp: String
})

const UserConnection = mongoose.model("userConnection", userConnectionSchema)

module.exports.UserConnection = UserConnection

module.exports.getUserProfile = (userId) => {
  return UserConnection.find({userId: userId}).exec()
}

module.exports.addRSVP = (connectionId, userId, rsvp) => {
  return UserConnection.create({
    connectionId: connectionId,
    userId: userId,
    rsvp: rsvp
  }).exec()
}

module.exports.updateRSVP = (connectionId, userId, rsvp) => {
  return UserConnection.updateOne({
    connectionId: connectionId,
    userId: userId
  }, {
    rsvp: rsvp
  }).exec()
}

module.exports.updateOrAddRSVP = (connectionId, userId, rsvp) => {
  return UserConnection.updateOne({
    connectionId: connectionId,
    userId: userId
  }, {
    rsvp: rsvp
  }, {
    upsert: true
  }).exec()
}

module.exports.deleteRSVP = (connectionId, userId) => {
  return UserConnection.deleteOne({
    connectionId: connectionId,
    userId: userId
  }).exec()
}

module.exports.removeConnection = (connectionId) => UserConnection.deleteMany({connectionId: connectionId})
