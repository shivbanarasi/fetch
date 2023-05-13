const Product=require('../models/product');

exports.getAddProduct=(req,res)=>{
res.render('addpro')
}

exports.home=(req,res)=>{
    res.send('<h1>this is home page</h1>')
}

exports.postAddProduct=(req,res)=>{
    
}