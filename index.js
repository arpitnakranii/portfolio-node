import express from 'express'

var router = express();

//     res.json({massage:"Hello From Express App"})
// })

import userController from './controller/user.js'
router.get('/',function (req,res){
  res.json("Hello")

})
router.post('/user/register', userController.register);
router.post('/user/login',userController.login)

router.listen(5000,function(){
    console.log("Server Started")
})