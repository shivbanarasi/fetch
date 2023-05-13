const express=require('express');
const route=express.Router();
const productController=require('../controllers/admin')

route.get('/',productController.home);

route.get('/add',productController.getAddProduct)

route.post('/add',productController.postAddProduct)

module.exports=route;
