module.exports = class UserProfile {
  constructor(user) {
    this.user = user
    this.connections = new Map()
  }
  addConnection(userConnection) {
    this.connections.set(userConnection.id(), userConnection) 
  }
  updateConnection(userConnection) {
    this.connections.set(userConnection.id(), userConnection) 
  }
  removeConnection(id) {
    return this.connections.delete(id)
  }
  getConnections() {
    return this.connections
  }
  getName() {
    return this.user.firstName + " " + this.user.lastName
  }
  emptyProfile() {
    this.user = null
    this.connections = null
  }
}
