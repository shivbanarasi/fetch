const Product=require('../models/product');
//const da=[1,2,3,4,5,6]
exports.getAddProduct=async(req,res)=>{
    const da=await Product.fetchAll()
    //for(let i of da)
    //console.log(i.title)
res.render('addpro',{
    data:da,
    updata:''
})
}

exports.home=(req,res)=>{
    res.send('<h1>this is home page</h1>')
}

exports.postAddProduct=async(req,res)=>{
    const title=req.body.title;
    const price=req.body.price;
    const discription=req.body.discription;
    const imageUrl=req.body.imageUrl;
    console.log(title,price,discription)
    const product=new Product(title,price,discription,imageUrl)
    product.save()
    .then(async(result)=>{
        //console.log('controller result=',result)
        const da=await Product.fetchAll()
        res.render('addpro',{
            data:da,
            updata:false
        })
    })
    .catch(err=>{console.log(err)})
}

exports.update=async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    const da=await Product.fetchAll()
    const data=await Product.fetchOne(id)
    console.log(data)
    res.render('addpro',{
        updata:data,
        data:da
    })
}
exports.postupdate=async(req,res)=>{
    const id=req.params.id;
    const data={
        title:req.body.title,
        price:req.body.price,
        discription:req.body.discription,
        imageUrl:req.body.imageUrl
    }
    console.log(id)
    
    const response=await Product.Update(id,data)
    const da=await Product.fetchAll()
    res.render('addpro',{
        updata:false,
        data:da
    })
    
}

exports.deleteit=async(req,res)=>{
    const id=req.params.id;
    const resp=await Product.delete(id)
    const da=await Product.fetchAll()
    res.render('addpro',{
        updata:false,
        data:da
    })
}