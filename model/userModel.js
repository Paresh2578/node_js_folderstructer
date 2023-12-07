const mongoose = require('mongoose');

 let useSchema = new mongoose.Schema({
    email : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },
     name : {
        type : String,
        required : true
     },
 })

 module.exports = new mongoose.model("users" , useSchema);