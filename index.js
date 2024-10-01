import express from 'express'

var router = express();

//     res.json({massage:"Hello From Express App"})
// })

// import {register, login} from './controller/user'
router.get('/',function (req,res){
  res.json("Hello")

})
// router.post('/user/register', register);
// router.post('/user/login',login)

router.listen(5000,function(){
    console.log("Server Started")
})