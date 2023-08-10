const express = require('express')
const app = express()
//const db = require('./DB/database') 
const route = require('./src/router/index') 

route(app);
app.get('/',(req,res)=>{
    res.send('a')
})
app.get('/home',(req,res)=>{
    res.send('a')
})
app.listen(8000, ()=>{
    console.log("server is online");
})