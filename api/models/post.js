/*const  mongoose  = require("mongoose");

const PostSchema=new mangoose.Schema(
    {
  title:{
    type:String,
    required:true,
    unique:true
  },desc:{
     type:String,
    required:true
  },
  photo:{
     type:String,
    required:false
  },username:{
     type:String,
    required:true
  },categories:{
 type:array,
 required:false
  },
},

    { timestamps: true } 
);
modeule.exports=mangoose.model("post",PostSchema);*/
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);