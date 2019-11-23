module.exports = class UserConnection {
  constructor(connection, rsvp) {
    this.connection = connection
    this.rsvp = rsvp
  }
  id() {
    return this.connection.id
  }
}

const mongoose = require("mongoose")

const userConnectionSchema = new mongoose.Schema({
  connection: Number,
  rsvp: String
})
