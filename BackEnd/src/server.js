const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path')
const handlebars = require('express-handlebars')

const port = 8000;
app.engine('hbs', handlebars.engine({
   extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, '../views') )

app.get('/',(req,res)=>{
   return res.render('home');

})
 app.listen(port,()=>{
    console.log("listening...on localhost:8000");
 })

 console.log(__dirname);