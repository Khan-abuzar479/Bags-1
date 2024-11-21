const mongoose = require("mongoose");

//mongoose.connect("mongoose.connect('mongodb://127.0.0.1:27017/Bags');")

const ownerSchema = mongoose.Schema({
  Fullname: {
    type: String,
    minLength: 3,
    trim:true,
  },
  email: String,
  password: String,
 products: {
    type: Array,
    default:[],
  },
  contact: Number,
  picture: String,
  gstin:String,
})
module.exports = mongoose.model("owner", ownerSchema);


