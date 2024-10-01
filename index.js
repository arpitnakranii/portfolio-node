import express from 'express'

var router = express();

//     res.json({massage:"Hello From Express App"})
// })

var {register, login}=require('../controller/user')
router.get('/',function (req,res){
  res.send("Hello")
  res.end()
})
router.post('/user/register', register);
router.post('/user/login',login)

router.listen(3000,function(){
    console.log("Server Started")
})