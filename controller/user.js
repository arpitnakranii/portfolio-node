// const userModel = require('../model/user')
// const Joi = require('joi')
// const Jwt = require('jsonwebtoken')

// const register = async (req, res) => {

//     const checkusername = userModel.find({
//         $or: [
//             { username: req.body.username },
//             { email: req.body.email }
//         ]
//     })
//     if (checkusername) {
//         return res.status(200).json({
//             error: 'user already registered !!'
//         })
//     }

//     const userSchema = Joi.object({
//         username: Joi.string()
//             .min(3)
//             .max(30)
//             .required()
//             .messages({
//                 'string.empty': 'Username is required',
//                 'string.min': 'Username should have a minimum length of 3 characters',
//                 'string.max': 'Username should have a maximum length of 30 characters'
//             }),

//         email: Joi.string()
//             .email()
//             .required()
//             .messages({
//                 'string.email': 'Please enter a valid email',
//                 'string.empty': 'Email is required'
//             }),

//         password: Joi.string()
//             .min(6)
//             .required()
//             .messages({
//                 'string.empty': 'Password is required',
//                 'string.min': 'Password should have a minimum length of 6 characters'
//             }),
//         role: Joi.string()
//             .valid('admin', 'user', 'moderator')  // Only allow these values
//             .default('user')
//             .messages({
//                 'any.only': 'Role must be one of [admin, user, moderator]',
//             })
//     });

//     const { error } = userSchema.validate(req.body, { abortEarly: false });

//     if (error) {
//         const err = error.details.map(detail => detail.message);
//         return res.status(200).json({
//             error: err
//         })
//     }

//     const data = await userModel.create(req.body)

//     if (data) {
//         return res.status(200).json({
//             massage: 'User Register SuccessFully',
//             data: data
//         })
//     } else {
//         return res.status(200).json({
//             massage: 'Something went wrong'
//         })
//     }
// }

// const login = async (req, res) => {

//     const userSchema = Joi.object({
//         username: Joi.string()
//             .min(3)
//             .max(30)
//             .required()
//             .messages({
//                 'string.empty': 'Username is required',
//                 'string.min': 'Username should have a minimum length of 3 characters',
//                 'string.max': 'Username should have a maximum length of 30 characters'
//             }),
//         password: Joi.string()
//             .min(6)
//             .required()
//             .messages({
//                 'string.empty': 'Password is required',
//                 'string.min': 'Password should have a minimum length of 6 characters'
//             })
//     });

//     const { error } = userSchema.validate(req.body, { abortEarly: false });

//     if (error) {
//         const err = error.details.map(detail => detail.message);
//         return res.status(200).json({
//             error: err
//         })
//     }

//     const data = await userModel.findOne({ username: req.body.username })

//     if(!data) return res.status(200).json({
//         error: 'not Found'
//     })
//     if (data && data['password'] != req.body.password) {
//         return res.status(200).json({
//             error: 'wrong password'
//         })
//     }


//     // const jwt = Jwt.sign(JSON.parse(data), process.env.SCRETEKEY)

//     return res.status(200).json({
//         massage: 'login successfully',
//         data: data,
//         // token: jwt
//     })

// }

// module.exports = {
//     register,
//     login
// }