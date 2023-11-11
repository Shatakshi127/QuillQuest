const express=require('express');
const {preEvents} = require('../controllers/userFuncs');


const userRouter=express.Router();

//JOIN or CREATE team button page
userRouter
.route('/')
.post(preEvents)











module.exports=userRouter;
