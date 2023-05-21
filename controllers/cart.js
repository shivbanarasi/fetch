const mongodb=require('mongodb')
const Product=require('../models/product');
const Cart=require('../models/cart')
const User=require('../models/user');

exports.addtocart=async(req,res)=>{
   
    const user_id=req.params.product_id;
    const product_id=req.params.user_id;
    Cart.fetchAll(user_id,product_id)
    .then(async(result)=>{
        console.log("result",result[0].quantity)
        if(result){
           result[0].quantity=parseInt( result[0].quantity)+1;
            Cart.updatequantity(result[0]._id,result[0].quantity)
        }
        else{
            const cart=new Cart(user_id,product_id,"1");
            cart.save();
            const updatecart=await Product.Updatecart(product_id,user_id)
           

        }
        res.redirect(`/login/${user_id}`)
        }
    )  
}

exports.getcart=async(req,res)=>{
    let arrdata=[];
    const userid=req.params.userid;
   // console.log('getcart user id',userid)
    const cartdatafromcart=await Cart.fetchcart("6461a53dac851e58d46bba01")
    //console.log('cart data',cartdatafromcart)
    for(let data of cartdatafromcart){
        const productdata=await Product.fetchOne(data.product_id)
       // console.log(productdata)
        arrdata.push(productdata)
    }
    console.log(arrdata[0].title)
    // const cartdata=await Product.fetch("6461a53dac851e58d46bba01")
   const userdata=await User.fetchOne("6461a53dac851e58d46bba01")
   // console.log("get cart user data",userdata[0])
    res.render('cart',{
        name:userdata[0],
        data:arrdata
    })
}

exports.removefromcart=async(req,res)=>{
    const userId=req.params.user_id;
    const productId=req.params.product_id;
    const remove=await Product.removefromcart(productId)
    const removecart=await Cart.removefromcart(productId,userId)
    res.redirect(`/yourcart/${userId}`)
}

exports.orderfromcart=async(req,res)=>{
    let arrdata=[];
    let total=0;
    const userid=req.params.userid;
   // console.log('getcart user id',userid)
    const cartdatafromcart=await Cart.fetchcart("6461a53dac851e58d46bba01")
    //console.log('cart data',cartdatafromcart)
    for(let data of cartdatafromcart){
        const productdata=await Product.fetchOne(data.product_id)
        total+=(parseInt(data.quantity)*parseInt(productdata.price));
        console.log(total)
        arrdata.push(productdata)
    }
    console.log(arrdata[1])
    // const cartdata=await Product.fetch("6461a53dac851e58d46bba01")
   const userdata=await User.fetchOne("6461a53dac851e58d46bba01")
   // console.log("get cart user data",userdata[0])
    res.render('order',{
        name:userdata[0],
        data:arrdata,
        orderdata:total,
        datafromcart:cartdatafromcart,
    })
    
}