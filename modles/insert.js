var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://namastedev:TGmSfquq9Qt89HoG@namstenode.9ido0mx.mongodb.net/portfolio?retryWrites=true&w=majority&appName=NamsteNode");
var conn=mongoose.connection;
var insertSchema=new mongoose.Schema({
  fname:{
    type:String,
    required:true,
  },
  resume:{
    type:String,
    required:true,
    },
  certificate:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now
  }
});
var model=mongoose.model('insert',insertSchema);
module.exports=model;
