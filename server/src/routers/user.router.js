const express = require('express');
const UserRouter = express.Router();

const UserController = require('../controllers/user.controller');

const path = '/user';

UserRouter.get(path, UserController.getUsersController);
UserRouter.post(path, UserController.postUserController);

module.exports = UserRouter;