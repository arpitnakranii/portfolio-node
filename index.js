import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(process.env.MONGOURL)
  .then(() => console.log('Connected!'));

  
var router = express();
router.use(bodyParser.urlencoded({ extended: false }))

//     res.json({massage:"Hello From Express App"})
// })

import userController from './controller/user.js'
router.get('/get',function (req,res){
  res.json("Hello world")

})
router.post('/user/register', userController.register);
router.post('/user/login',userController.login)

router.listen(5000,function(){
    console.log("Server Started")
})