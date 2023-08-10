const express = require('express')
const router = express.Router()

class HomeController{
    
    index(req,res){
        res.json("Okillaaa");
       
    }
}
module.exports = new HomeController;