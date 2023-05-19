const mongodb=require('mongodb')
const getDb=require('../util/database').getDb;

class Cart{
    constructor(product_id,user_id,quantity){
        this .product_id=product_id;
        this.user_id=user_id;
        this.quantity=quantity;
    }

    save(){
        console.log(this)
        const db =getDb();
        return db.collection('cart').insertOne(this)
        .then(result=>
            console.log("result=",result))
        .catch(err=>console.log(err))
    }

    static fetchAll(proid,id){
        console.log('proid',proid)
        const db=getDb();
        return db.collection('cart').find({$and:[{user_id:id},{product_id:proid}]})
        .toArray()
        .then(result=>{
            return result;
        })

    }

    static fetchcart(proid,id){
        const db=getDb();
        return db.collection('cart').find({user_id:proid})
        .toArray()
        .then(result=>{
            return result;
        })
    }

    static removefromcart(userid,productid){
        console.log(userid,productid)
        const db=getDb();
        return db.collection('cart')
        .deleteOne({$and:[{product_id:userid},{user_id:productid}]})
        .then(result=>{
            console.log(result)
        })
        .catch(err=>console.log(err))
    }

   static updatequantity(productid,quantity){
    const db=getDb();
    return db.collection('cart')
    .updateOne({_id:new mongodb.ObjectId(productid)},
     {
        $set:{
            quantity:quantity
        }
     }   )
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
   }
    // static remove(id){

    // }

    
}

module.exports=Cart;