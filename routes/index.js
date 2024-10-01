var express = require('express');
var router = express.Router();

var {register, login}=require('../controller/user')

router.post('/user/register', register);
router.post('/user/login',login)
module.exports = router;
