/*const  mongoose  = require("mongoose");

const UserSchema=new mongoose.Schema({
    userame:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true,
       
    },profilPic:{
        type:String,
        default:""
    },
},{ timestamps:true });
module.exports=mongoose.model("user",UserSchema);*/
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);