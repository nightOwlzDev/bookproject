const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    userID : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 15
    },
    passWord: {
        required: true,
        type : String,
        minlength : 6,
        maxlength : 255
    },
    email : {
        required : true,
        type : String,
        minlength : 5,
        maxlength : 255,
        unique : true
    }
  },
  { versionKey: false }
);

const userModel = mongoose.model('users', userSchema)

module.exports = userModel