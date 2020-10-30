var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://singh:Singh@123@cluster0.7hhkx.mongodb.net/portfolio?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
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