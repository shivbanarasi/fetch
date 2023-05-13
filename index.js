const express=require('express');
const app=express();
const mongoConnect=require('./util/database').mongoConnect;
const route=require('./route/route');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
 extended:true
}))

app.set("view engine","ejs");

app.use(route);


mongoConnect()
app.listen(4000,()=>{
    console.log('server running over port 4000')
})