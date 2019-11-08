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
    this.connections.delete(id)
  }
  getConnections() {
    return this.connections
  }
  emptyProfile() {
    this.user = null
    this.connections = null
  }
}
