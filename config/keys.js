if(process.env.NODE_ENV=="production"){
  module.exports=require('./prods')
}else{
  module.exports=require('./dev')
}