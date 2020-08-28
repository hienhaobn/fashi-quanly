const express = require('express');
const UserRouter = express.Router();

const UserController = require('../controllers/user.controller');

const path = '/user';

UserRouter.get(path, UserController.getUsersController)
          .post(path, UserController.postUserController)
          .delete('/user/:id', UserController.deleteUserController)
          .put(path, UserController.editUserController)
          .post('/user/:id', UserController.createUserController);
          

module.exports = UserRouter;