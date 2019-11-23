const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String
})

const User = mongoose.model("user", userSchema)

module.exports.getAllUsers = () => User.find({}).exec()

module.exports.getUser = (id) => User.findOne({id: id}).exec()

module.exports.GetRandomUser = () => User.countDocuments({}).exec()
