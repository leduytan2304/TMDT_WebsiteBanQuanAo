const express = require('express')
const app = express()
//const db = require('./DB/database') 
const route = require('./src/router/index') 

// route(app);
app.get('/api',(req,res)=>{
    res.json({"user":["user1","user2","user3"]})
})
app.get('/home',(req,res)=>{
    res.json('a')
})
app.listen(8000, ()=>{
    console.log("server is online");
})