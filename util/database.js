const mongodb=require('mongodb');
const Mongoclient=mongodb.MongoClient;
let _db;

const mongoConnect=callback=>{
    Mongoclient.connect('mongodb://localhost:27017')
.then(client=>{
    console.log('connected')
    _db=client.db();
    //callback();
})
.catch(err=>console.log(err));
}

const getDb=()=>{
    if(_db){
        return _db;
    }
    throw 'no database found!'
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;