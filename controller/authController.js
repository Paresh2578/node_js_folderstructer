const mongoose = require('mongoose');
const User = require('../model/userModel');
const bcrypt = require("bcryptjs");
require('dotenv').config()

exports.signUp = async (req , resp) =>{
    // check valid data
    // check allready user exitc user
    // hased password
    // save the user

    try{
       let  {email , password ,name } = req.body;
 
        // check valid data
       if(!email || !password  || !name){
        return resp.status(400).send({message : "invalid data"});
       }

       // check allready user exitc user
       let user = await User.findOne({email : email});
       if(user){
          return  resp.status(400).send({message : "user already signUp"});
       }

       // hased password
       let hashedPassword = await bcrypt.hash(password  , 12);

       // save the user
       let newUser = await User({email : email , password : hashedPassword , name : name})
       await newUser.save();
       resp.send({status : "ok"});

    }catch(error){
       return resp.status(400).send({ message : "signUp failed"});  
    }
}

exports.login = async (req , resp)=>{
    // check valid email , password
    // comparePassword
    // send data

    try{
        
     let {email , password} = req.body;

       if(!email || !password){
         return resp.status(400).send({message : "invalid data"});
       }


       let exitc_user =  await User.findOne({email : email});

       if(!exitc_user){
           return resp.status(400).send({message : "worng email"});
       }

       let verifyPassword = await bcrypt.compare(password , exitc_user.password);

       if(!verifyPassword){
         return resp.status(400).send({message : "worng password"});
       }

       exitc_user.password = "";

       resp.send(exitc_user);

    }catch(error){
      return resp.status(400).send({ message : "logIn failed"});
    }

}