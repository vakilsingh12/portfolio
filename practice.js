// function sum(a,b)
// {
//   return a+b;
// }
// module.exports=sum;
// module.exports=(a,b)=>
// {
//   return a+b;
// }
// module.exports=
// {
//  sum:(a,b)=>{
//    return a+b;
//  },
//  mul:(c,d)=>{
//    return c*d;
//  }
// }


// app.js

// const getsum=require('./test');
// console.log(getsum.mul(5,7));
// console.log(getsum.sum(5,7));

// const http=require('http');
// const path=require('path');
// http.createServer((req,res)=>{
//   res.write("<h1>Hello World</h1>")
//   res.end()
// }).listen(3000)


// indexedDB.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link rel="stylesheet" href="/style.css">
// </head>
// <body>
//   <button id="mybtn">FETCH IT</button>
//   <h1>Hello World</h1>
//   <script>
//     document.getElementById("mybtn").onclick=()=>{
//       const url="http://localhost:5000/home";
//       fetch(url)
//       .then(res=>res.json())
//       .then(res2=>console.log(res2));
//     }
//   </script>
// </body>
// </html>