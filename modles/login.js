var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://namastedev:TGmSfquq9Qt89HoG@namstenode.9ido0mx.mongodb.net/portfolio?retryWrites=true&w=majority&appName=NamsteNode");
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
