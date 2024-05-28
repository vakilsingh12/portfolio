var mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
var conn=mongoose.connection;
var loginSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    index:{
      unique:true
    }},
  password:{
    type:String,
    required:true,
  },
});
var model=mongoose.model('login',loginSchema);
module.exports=model;