const express=require('express');
const path=require('path');
const app=express();
const mongoConnect=require('./util/database').mongoConnect;
const route=require('./route/route');
const bodyParser = require('body-parser');

console.log(path.join(__dirname,'./public','style.css'))
app.use(express.static(path.join(__dirname,'./public')))
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