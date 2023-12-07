const express = require('express');
require('./config');
const cors = require('cors');
require('dotenv').config();

//router
const authRouter = require('./router/authRouer')


const app = express();
const PORT =  4500 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/auth' ,authRouter)


// app.get('/' , async(req , resp)=>{
//     try{
//         let result = await User.find();
//         resp.send({status : "ok" , data : result});
//     }catch(error){
//         resp.status(400).send({status : "error" , message : "get user fail"});  
//     }
// })

// app.post('/addUser' , async(req , resp)=>{
//      try{
//         let result = new User(req.body);
//         await result.save();
//         resp.send({status : "ok"});
//      }catch(error){
//         resp.status(400).send({status : "error" , message : "add user fail" });
//      }
// })


// app.put('/updateUser/:id' , async(req , resp)=>{
//     try{
//        let result = await User.updateOne(
//         {_id : req.params.id},
//         {$set : req.body}
//        );
//        resp.send({status : "ok"});
//     }catch(error){
//        resp.staus(400).send({status : "error" , message : "update user fail" });
//     }
// })

// app.delete('/deleteUser/:id' , async(req , resp)=>{
//     try{
//        let result = await User.deleteOne({_id : req.params.id});
//        resp.send({status : "ok"});
//     }catch(error){
//        resp.status(400).send({status : "error" , message : "delete user fail" });
//     }
// })




app.listen(PORT , ()=> console.log(`server running... ${PORT}`));

