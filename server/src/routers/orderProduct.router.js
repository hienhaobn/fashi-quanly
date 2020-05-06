const express = require('express');
const OrderProductRouter = express.Router();

const OrderProductController = require('../controllers/orderProduct.controller');
const path = '/order';

OrderProductRouter.get(path, OrderProductController.getOrdersProductController);
OrderProductRouter.post(path, OrderProductController.postOrderProductController);

module.exports = OrderProductRouter;