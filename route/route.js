const express=require('express');
const route=express.Router();
const productController=require('../controllers/admin')

route.get('/',productController.home);

route.get('/add',productController.getAddProduct)

route.post('/add',productController.postAddProduct)

route.get('/update/:id',productController.update)

route.post('/update/:id',productController.postupdate);

route.get('/delete/:id',productController.deleteit)

module.exports=route;
