import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors'
import 'dotenv/config'

var router = express();
const corsOptions = {
  origin: '*',                 // Allow all origins
  methods: 'GET,POST,PUT,DELETE,OPTIONS',  // Allow all methods
  allowedHeaders: '*',         // Allow all headers
  exposedHeaders: '*',         // Expose all headers
  credentials: true,           // Allow credentials (cookies, authorization headers)
  optionsSuccessStatus: 200    // Some legacy browsers choke on 204
};

// Enable CORS with full access
router.use(cors(corsOptions));
const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log('Connected!'));


router.use(bodyParser.urlencoded({ extended: false }))

//     res.json({massage:"Hello From Express App"})
// })

import userController from './controller/user.js'
router.get('/get-user',userController.getUser)
router.post('/user/register', userController.register);
router.post('/user/login', userController.login)

router.listen(port, function () {
  console.log("Server Started " + port)
})