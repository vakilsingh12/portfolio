const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const conModel=require('../modles/index');
const loginModel=require('../modles/login');
var insertModel=require('../modles/insert');
const path=require('path');
var picPath = path.resolve(__dirname,'public'); 
router.use(express.static(picPath));
const multer=require('multer');
var storage = multer.diskStorage({
  destination:function(req,file,cb){
       cb(null,'./public/uploads')
  },
  filename(req,file,cb){
      cb(null,file.originalname)
  }
})
const fname1={
"fname":"Vakil Singh"
}
var upload=multer({
  storage,limits: {fileSize: 3500000},
  fileFilter: (req, file, cb) => {
   if(path.extname(file.originalname)!=='.pdf'){
     return cb('only pdfs are allowed');
   }
   cb(null,true)
}
}).single('resume');
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
// const fname=insertModel.findOne({}).sort({_id:-1});
router.get('/',(req,res,next)=>{
  insertModel.find((err,data)=>{
    res.render('index',{title:"Vakil Singh",msg:"",user:data});
  })
});
function checkEmail(req,res,next){
  var email=req.body.email;
  var check=conModel.findOne({email:email});
  check.exec((err,data)=>{
    if(data){
      return res.render('index',{title:'vakil singh',user:fname1,msg:"Email Already Exists ! try again."});
    }
    next();
  })
}
router.post('/',checkEmail,(req,res,next)=>{
  const {name,email,subject,project}=req.body;
   var conDetail=new conModel({
     name,email,subject,project
   });
   console.log()
   conDetail.save((err,data)=>{
     if(err) throw err;
     insertModel.find((err,data)=>{
      res.render('index',{title:"Vakil Singh",user:data,msg:"Your Record Saved Successfully"});
      
    }) 
   });
  });
router.get('/certificate',(req,res,next)=>{
  insertModel.find((err,data)=>{
    res.render('certificate',{title:"Vakil Singh",msg:"",user:data});
  })
  
});
router.post('/certificate',checkEmail,(req,res,next)=>{
  const {name,email,subject,project}=req.body;
   var conDetail=new conModel({
     name,email,subject,project
   });
   conDetail.save((err,data)=>{
     if(err) throw err;
     insertModel.find((err,data)=>{
      res.render('certificate',{title:"Vakil Singh",msg:"Your Record Saved Successfully",user:data});
    })
   });
  });

// Login Router

router.get('/login',(req,res,next)=>{
  var usertoken=localStorage.getItem('userToken');
  if(usertoken){
  res.redirect('/insert');
  }else{
    res.render('login',{title:"Vakil Singh",msg:""});
  }
});
function checkLogin(req,res,next){
  var userToken=localStorage.getItem('userToken');
  try {
    var decoded = jwt.verify(userToken, 'loginToken');
  } catch(err) {
    return res.redirect('/login');
  }
  next();
}
router.post('/login',(req,res,next)=>{
  const {email,password}=req.body;
  const checkuesr=loginModel.findOne({email:email});
  checkuesr.exec((err,data)=>{
    if(err) throw err;
    if(data==null){
      res.render('login',{title:'vakil singh',msg:"Invalid Username Or Password"});
    }else{
      if(data.password===password){
        var getuserId=data._id;
      var token = jwt.sign({ userId: getuserId }, 'loginToken');
      localStorage.setItem('userToken', token);
      res.redirect('/insert');
      }else{
        res.render('login',{title:'vakil singh',msg:"Invalid Username Or Password"});
      }
    }
  })
});








// Insert api

router.get('/insert',checkLogin,(req,res,next)=>{
  res.render('insertdata',{title:"Vakil Singh",msg:""});
});
router.post('/insert',upload,(req,res,next)=>{
  const fname=req.body.fname;
  var resume= 'uploads/'+req.file.originalname;
  var uploadfile=new insertModel({
    fname,
    resume,
  })
  uploadfile.save(function(err,doc){
    if(err) throw err;
    res.render('insertdata',{title:"Vakil Singh",msg:""});
  });
});



// logout
router.get('/logout',(req,res)=>{
  localStorage.removeItem('userToken');
  res.redirect('/login');
});

router.get('/download/:id',(req,res)=>{  
  insertModel.find({_id:req.params.id},(err,data)=>{  
      if(err) throw err;
         var path=__dirname+"../../"+'/public/'+data[0].resume;
         res.download(path);
  })  
})


module.exports=router;