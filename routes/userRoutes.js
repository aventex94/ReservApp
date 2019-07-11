const express = require('express');
const userRoutes = express.Router();
const userController = require('../controller/userController')
const validateUser = require('../actions/actionUser')
const config = require('../core/config')
const securityController = require('../controller/securityController');
const basePath = config.basePath + '/users';


userRoutes.get(basePath,securityController.v1.validate,userController.v1.getAllUsers); 
userRoutes.get(basePath + '/:1',securityController.v1.validate,userController.v1.getUserById);
userRoutes.post(basePath + '/create',validateUser.v1.validateBodyPost,userController.v1.createUser);
userRoutes.post(basePath + '/login',securityController.v1.authenticate);







module.exports = userRoutes;