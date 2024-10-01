import mongoose  from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'moderator'],
        default: 'user'
    }
})

const model= mongoose.model('user',userSchema)
export default model;