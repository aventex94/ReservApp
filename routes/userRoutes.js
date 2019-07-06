const express = require('express');
const userRoutes = express.Router();
const userController = require('../controller/userController')
const validateUser = require('../actions/actionUser')
const config = require('../core/config')
const basePath = config.basePath + '/users';


userRoutes.get(basePath,userController.v1.getAllUsers); //utilizar este como base
userRoutes.get('/user/:id',userController.v1.getUserById);
userRoutes.post('/userCreate',validateUser.v1.validateBodyPost,userController.v1.createUser);
userRoutes.post('/authenticate',userController.v1.authenticate);
userRoutes.post('/verificarToken',userController.v1.verificarToken);
module.exports = userRoutes;