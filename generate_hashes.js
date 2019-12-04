const crypto = require("crypto")

const genSalt = () => crypto.randomBytes(64).toString("hex")

const genHash = (salt, password) => {
  const algo = crypto.createHmac("sha512", salt)
  algo.update(password)
  return algo.digest("hex")
}

const passwords = [
  "12345",
  "password",
  "example"
]

passwords.forEach((password) => {
  // this is how we generate a password hash
  //
  // 1. create a new random salt
  const salt = genSalt()

  // 2. hash the password and salt (combined in genHash)
  const hash = genHash(salt, password)

  // 3. print and later add to hw5_create_db.txt as a field to be verified
  console.log(password + ":")
  console.log("\tsalt: \"" + salt + "\"")
  console.log("\thash: \"" + hash + "\"\n")
})
