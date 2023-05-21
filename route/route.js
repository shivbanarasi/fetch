const express=require('express');
const userController=require('../controllers/user')
const route=express.Router();
const productController=require('../controllers/admin')
const cartController=require('../controllers/cart')

route.get('/',productController.home);

route.get('/register',userController.register)

route.post('/register',userController.postRegister)

route.get('/login',userController.login)

route.post('/login',userController.postLogin)

route.get('/login/:id',userController.userlogin)

route.get('/add',productController.getAddProduct)

route.post('/add',productController.postAddProduct)

route.get('/update/:id',productController.update)

route.post('/update/:id',productController.postupdate);

route.get('/delete/:id',productController.deleteit)

route.get('/cart/:user_id/:product_id',cartController.addtocart)

route.get('/yourcart/:userid',cartController.getcart)

route.get('/removefromcart/:product_id/:user_id',cartController.removefromcart);

route.get('/order/:userId',cartController.orderfromcart)


module.exports=route;
