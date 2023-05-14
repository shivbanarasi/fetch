const mongodb=require('mongodb')
const getDb=require('../util/database').getDb;

class Product{
    constructor(title,price,discription,imageUrl){
        this.title=title;
        this.price=price;
        this.discription=discription;
        this.imageUrl=imageUrl;
    }

    save(){
        console.log(this)
        const db =getDb();
        return db.collection('products').insertOne(this
        //     {
        //     name:'a book',
        //     price:12.22,
        //     discription:"its a good book",
        //     imageUrl:"dfkjdhfdjl"
        // }
        )
        .then(result=>
            console.log("result=",result))
        .catch(err=>console.log(err))
    }
    static fetchAll(){
        const db =getDb();
        return db.collection('products').find().toArray()
        .then(result=>{
            //console.log(result)
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