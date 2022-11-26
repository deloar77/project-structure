const express = require("express");
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const {readdirSync} = require('fs');

//middleware
app.use(helmet())
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());

//db connection

mongoose
.connect(process.env.local)
.then(()=>console.log("db connected"))
.catch((error)=>console.log("db error",error));
 
//server port
 const port = process.env.PORT || 9000;
 app.listen(port,()=>{
    console.log('app is running at ${port}');
 });