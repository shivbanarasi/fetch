const User=require('../models/user')
const Product=require('../models/product')

exports.register=(req,res)=>{
    res.render('register')
}

exports.postRegister=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const user=new User(name,email,password)
    user.save()
    .then(resp=>{
        console.log(resp)
        res.render('login');
    })
    .catch(err=>console.log(err))
}

exports.login=(req,res)=>{
    res.render('login');
}

exports.postLogin=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    console.log(email,password)
    User.compareLogin(email)
    .then(async(resp)=>{
        console.log(`${resp.password}`==`${password}`);
        if(`${resp.password}`===`${password}`){
           // const da=await Product.fetchAll()
            // res.render('products',{
            //     data:da,
            //     name:resp
            // })
            res.redirect(`/login/${resp._id}`)
        }
    })
}

exports.userlogin=async(req,res)=>{
    //const id=req.params.id;
    console.log('this is user id',req.params.id)
    const productData=await Product.fetchAll();
     User.fetchOne("6461a53dac851e58d46bba01")
     .then(resp=>{
        console.log(resp[0])
        res.render('products',{
            data:productData,
            name:resp[0],
        })
     })
    
   
}

