const mongoose = require('mongoose');
require('dotenv').config();




try{
//    mongoose.connect(`${process.env.DATABASE_URL}` , { useNewUrlParser:true , useUnifindTopology : true});
   mongoose.connect(`${process.env.DATABASE_URL}`);
   console.log("database connecting...")

}catch(error){
    console.log("database connecting error");
}