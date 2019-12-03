const crypto = require("crypto")

module.exports.genSalt = () => crypto.randomBytes(64).toString("hex")

module.exports.genHash = (salt, password) => {
  const algo = crypto.createHmac("sha512", salt)
  algo.update(password)
  return algo.digest("hex")
}
