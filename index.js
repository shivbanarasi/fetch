const express=require('express');
const app=express();
const mongoConnect=require('./util/database').mongoConnect;
const route=require('./route/route')

app.set("view engine","ejs");

app.use(route);


mongoConnect()
app.listen(4000,()=>{
    console.log('server running over port 4000')
})