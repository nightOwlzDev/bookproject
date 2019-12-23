
const User = require("../models/user");
const passwordHash = require('password-hash');

module.exports = class usermodule {
  constructor(id) {
    this._id = id;
  }

  async addUser(req, res) {

    const { userID , passWord , email } = req.body
    var hashedPassword = passwordHash.generate(passWord)
    const user = new User({
        userID : userID,
        passWord : hashedPassword,
        email : email  
    })
    await user.save();
    res.status(201).end();

  }


//   async checkUser(req, res) {

//     const { userID , passWord } = req.body
//     var hashedPassword = passwordHash.generate(passWord)
//     const user = new User({
//         userID : userID,
//         passWord : hashedPassword,
//         email : email  
//     })
//     await user.save();
//     res.status(201).end();

//   }


}
