const getDb=require('../util/database').getDb;

class Product{
    constructor(title,price,discription,imageUrl){
        this.title=title;
        this.price=price;
        this.discription=discription;
        this.imageUrl=imageUrl;
    }

    save(){
        const db =getDb;
        db.collection('products').insertOne(this
        //     {
        //     name:'a book',
        //     price:12.22,
        //     discription:"its a good book",
        //     imageUrl:"dfkjdhfdjl"
        // }
        )
        .then(result=>
            console.log(result))
        .catch(err=>console.log(err))
    }
}

module.exports=Product;