const express = require('express');
const userRoutes = express.Router();
const userController = require('../controller/userController')
const validateUser = require('../actions/actionUser')



userRoutes.get('/users',userController.v1.getAllUsers);
userRoutes.get('/user/:id',userController.v1.getUserById);
userRoutes.post('/userCreate',validateUser.v1.validateBodyPost,userController.v1.createUser);
userRoutes.post('/authenticate',userController.v1.authenticate);
module.exports = userRoutes;