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
}

module.exports=Product;