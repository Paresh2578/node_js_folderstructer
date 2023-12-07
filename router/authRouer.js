const express = require('express');
const autthController = require('../controller/authController')

const authRouter = express.Router();

authRouter.post('/signUp' , autthController.signUp);
authRouter.get('/logIn' , autthController.login);


module.exports = authRouter;