const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const path=require('path');
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
const indexRouter=require('./routes/index');
app.use('/',indexRouter);

app.listen(process.env.PORT || 4000);