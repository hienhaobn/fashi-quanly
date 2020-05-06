const express = require('express');
const PriceRouter = express.Router();

const PriceController = require('../controllers/price.controller');

const path = '/price';

PriceRouter.get(path, PriceController.getPricesController);
PriceRouter.post(path, PriceController.postPriceController);

module.exports = PriceRouter;