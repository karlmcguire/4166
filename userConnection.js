module.exports = class UserConnection {
  constructor(connection, rsvp) {
    this.connection = connection
    this.rsvp = rsvp
  }
  id() {
    return this.connection.id
  }
}
