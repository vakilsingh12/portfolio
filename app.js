const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const path=require('path');
var insertModel=require('./modles/insert');
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
const indexRouter=require('./routes/index');
app.use('/',indexRouter);

app.listen(4000);