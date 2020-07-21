const express=require('express');
const app=express();
const port=process.env.PORT || 5000
const bodyParser=require('body-parser');
app.use(express.static('public'));
require('./models/wish');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
require('./Route')(app);
app.set('view engine','ejs');
app.listen(port,()=>{
  console.log("server is running.."+port)
})