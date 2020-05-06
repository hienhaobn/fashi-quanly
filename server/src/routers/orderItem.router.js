const express = require('express');
const OrderItemProductRouter = express.Router();

const OrderItemProductController = require('../controllers/orderItem.controller');
const path = '/orderItems';

OrderItemProductRouter.get(path, OrderItemProductController.getOderItemsController);
// OrderProductRouter.post(path, OrderItemProductRouter.postOrderProductController);

module.exports = OrderItemProductRouter;