const mongoose=require('mongoose')
const {Schema}=mongoose ;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    } 
});

//datbase is created of name user in system then on this user model we can perform CURD operations
module.exports=mongoose.model('user',UserSchema)