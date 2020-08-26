const express = require('express');
const UserRouter = express.Router();

const UserController = require('../controllers/user.controller');

const path = '/user';

UserRouter.get(path, UserController.getUsersController)
          .post(path, UserController.postUserController)
          .delete(path, UserController.deleteUserController)
          .put(path, UserController.editUserController);

module.exports = UserRouter;