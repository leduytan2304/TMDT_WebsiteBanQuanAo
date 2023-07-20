const express = require('express');
const mysql = require('mysql');
const app = express();
//const db = mysql.createConnection()


 app.listen(8000,()=>{
    console.log("listening...");
 })