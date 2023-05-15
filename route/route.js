const express=require('express');
const userController=require('../controllers/user')
const route=express.Router();
const productController=require('../controllers/admin')

route.get('/',productController.home);

route.get('/register',userController.register)

route.post('/register',userController.postRegister)

route.get('/login',userController.login)

route.post('/login',userController.postLogin)

route.get('/add',productController.getAddProduct)

route.post('/add',productController.postAddProduct)

route.get('/update/:id',productController.update)

route.post('/update/:id',productController.postupdate);

route.get('/delete/:id',productController.deleteit)


module.exports=route;
