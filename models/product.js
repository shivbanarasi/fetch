const mongodb=require('mongodb')
const getDb=require('../util/database').getDb;

class Product{
    constructor(title,price,discription,imageUrl,user_id){
        this.title=title;
        this.price=price;
        this.discription=discription;
        this.imageUrl=imageUrl;
        this.user_id=user_id;
    }

    save(){
        console.log(this)
        const db =getDb();
        return db.collection('products').insertOne(this)
        .then(result=>
            console.log("result=",result))
        .catch(err=>console.log(err))
    }
    static fetchAll(id){
        const db =getDb();
        return db.collection('products')
        .find({user_id:id}).toArray()
        .then(result=>{
            console.log(result)
            return result
        })
        .catch(err=>console.log(err))
    }
    static Update(id,data){
        const db=getDb();
        return db.collection('products').updateOne(
            { mongo_id:newdb.ObjectId(id)},
            {$set:{
                title:data.title,
                price:data.price,
                discription:data.discription,
                imageUrl:data.imageUrl
            }}).then(result=>{
                console.log(result)
            }).catch(err=>{
                console.log(err)
            })
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