/*const  mongoose  = require("mongoose")

const CategorySchema=new mangoose.schema(
    {
  name :{
    type: String,
    required: true
  },
},

    { timestamps: true } 
);
modeule.exports=mangoose.model("Category",CategorySchema);*/
const mongoose = require("mongoose");

const CategorySchema = new mongoose .Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
