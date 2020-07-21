const express=require('express');
const app=express();
const mongoose=require("mongoose");
const {mongourl}=require('./config/keys')
// const Wish=require('./models/wish');
const Wish=mongoose.model("wishes");
// var data=['code','sleep'];
mongoose.connect(mongourl,{useNewUrlParser:true});

module.exports=(app)=>{
app.get('/',(req,res)=>{
  Wish.find({}).then(data=>{
    console.log(data)
     res.render('home',{data:data})
  })
})

app.get('/about',(req,res)=>{
  res.render('about');
})

app.post('/sent',(req,res)=>{
  // console.log(req.body.item);
  // data.push(req.body.item)
  // res.send(data)
  const Item=new Wish({
    wish:req.body.item
  });
  Item.save().then(data=>{
    console.log("saved");
    req.send(data);
  })
})

app.delete('/remove/:id',(req,res)=>{
  Wish.findOneAndDelete({wish:req.params.id}).then(data=>{
    console.log("deleted");
    res.send(data)
  })
  // data=data.map(it=>{
  //   if(it!=req.params.id){
  //     return it
  //   }
  // })
  
})

// app.get('/profile/:id',(req,res)=>{
//   data={
//     name:req.params.id
//   }
//   res.render('home',{data:data})
// })
// app.get('/Home',(req,res)=>{
//   res.send({msg:"vakil singh"})
// })
}