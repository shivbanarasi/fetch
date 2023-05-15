const mongodb=require('mongodb')
const getDb=require('../util/database').getDb;

class Users{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    save(){
        console.log(this)
        const db =getDb();
        return db.collection('users').insertOne(this)
        .then(result=>
            console.log("result=",result))
        .catch(err=>console.log(err))
    }

    static compareLogin(email){
        const db=getDb();
        return db.collection('users').find({email:email}).next()
        .then(result=>{
            return result
        })
        .catch(err=>console.log(err))   
    }
}

module.exports=Users;