const mongoose = require("mongoose");

//mongoose.connect("mongoose.connect('mongodb://127.0.0.1:27017/Bags');")

const userSchema = mongoose.Schema({
  Fullname: {
    type: String,
    minLength: 3,
    trim:true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default:[]
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default:[]
  },
  contact: Number,
  picture:String
})
module.exports = mongoose.model("User", userSchema);


