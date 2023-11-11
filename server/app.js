const express=require('express');
const fs = require('fs');
const path = require('path');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const db=require('./config/db.js');
const userRouter = require('./routers/userRouter.js');





const app=express();
app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use(cookieParser());  

global.appRoot = path.resolve(__dirname);




app.use('/register',userRouter);






const port = process.env.PORT || 3001;
const host = '127.0.0.1';

app.listen(port, host, () => console.log(`http://${host}:${port}`));
