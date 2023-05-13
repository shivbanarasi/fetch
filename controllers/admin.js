const Product=require('../models/product');

exports.getAddProduct=(req,res)=>{
res.render('addpro')
}

exports.home=(req,res)=>{
    res.send('<h1>this is home page</h1>')
}

exports.postAddProduct=(req,res)=>{
    const title=req.body.title;
    const price=req.body.price;
    const discription=req.body.discription;
    const imageUrl=req.body.imageUrl;
    console.log(title,price,discription)
    const product=new Product(title,price,discription,imageUrl)
    product.save()
    .then(result=>{
        console.log('controller result=',result)
        res.render('addpro')
    })
    .catch(err=>{console.log(err)})
}