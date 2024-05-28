var mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
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