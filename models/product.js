const mongodb=require('mongodb')
const getDb=require('../util/database').getDb;

class Product{
    constructor(title,price,discription,imageUrl,quantity,cartuserId){
        this.title=title;
        this.price=price;
        this.discription=discription;
        this.imageUrl=imageUrl;
        this.quantity=quantity;
        this.cartuserId=cartuserId;
    }

    save(){
        console.log(this)
        const db =getDb();
        return db.collection('products').insertOne(this)
        .then(result=>
            console.log("result=",result))
        .catch(err=>console.log(err))
    }
    static fetchAll(){
        const db =getDb();
        return db.collection('products')
        .find().toArray()
        .then(result=>{
            console.log(result)
            return result
        })
        .catch(err=>console.log(err))
    }
    static Update(id,data){
        const db=getDb();
        return db.collection('products').updateOne(
            { _id:new mongodb.ObjectId(id)},
            {$set:{
                title:data.title,
                price:data.price,
                discription:data.discription,
                imageUrl:data.imageUrl,
                quantity:data.quantity,
            }}).then(result=>{
                console.log(result)
            }).catch(err=>{
                console.log(err)
            })
    }

    static Updatecart(id,userId){
        const db=getDb();
        return db.collection('products').updateOne(
            { _id:new mongodb.ObjectId(id)},
            {
                $set:{
                    cartuserId:userId
                }}).then(result=>{
            console.log(result)
        }).catch(err=>console.log(err))
    }

    static fetchOne(id){
        const db=getDb();
        console.log('infetchOne',id)
        return db.collection('products')
        .find({_id:new mongodb.ObjectId(id)})
        .next()
    .then(result=>{
           return result
        })
    .catch(err=>console.log(err))
     } 

     static fetch(id){
        console.log('id in fetch',id)
        const db=getDb();
        return db.collection('products')
        .find({cartuserId:id})
        .toArray()
    .then(result=>{
           return result
        })
    .catch(err=>console.log(err))
     }

     static removefromcart(id){
        const db=getDb();
        return db.collection('products')
        .updateOne({_id:new mongodb.ObjectId(id)},
        {
            $set:{
                cartuserId:''
            }})
        .then(result=>{
            console.log(result)
        }).catch(err=>console.log(err))
        .then
    }

     
    static delete(id){
        const db=getDb();
        return db.collection('products')
        .deleteOne({ _id:new mongodb.ObjectId(id)})
        .then(resp=>{
            console.log(resp)
        })
        .catch(err=>console.log(err))
    } 
}

module.exports=Product;