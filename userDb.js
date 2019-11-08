const User = require("./user.js")

let users = [
  new User(0, "Karl", "McGuire", "karl@karlmcguire.com"),
  new User(1, "Sarah", "Goldstein", "sarah@gmail.com"),
  new User(2, "John", "Smith", "john.smith@gmail.com"),
  new User(3, "Bob", "Stevens", "bob@gmail.com"),
]

module.exports.GetRandomUser = () => {
  return users[Math.floor(Math.random() * Math.floor(users.length))]
}
