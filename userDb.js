const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  salt: String,
  hash: String
})

const User = mongoose.model("user", userSchema)

module.exports.findUser = (name) => User.findOne({username: name}).exec()

module.exports.getAllUsers = () => User.find({}).exec()

module.exports.getUser = (id) => User.findOne({id: id}).exec()

module.exports.GetRandomUser = () => User.countDocuments({}).exec()

module.exports.newId = () => User.countDocuments({}).exec()

module.exports.addUser = (id, user) => {
  User.create({
    id: id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    username: user.username,
    salt: user.salt,
    hash: user.hash,
  })
}
