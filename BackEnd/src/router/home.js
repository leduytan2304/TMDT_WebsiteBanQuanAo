const express = require('express')
const router = express.Router()

const HomeController = require('../../src/controller/HomeController')

router.get('/',HomeController.index);


module.exports = router;