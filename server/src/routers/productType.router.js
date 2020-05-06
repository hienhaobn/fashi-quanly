const express = require('express');
const ProductTypeRouter = express.Router();

const ProductTypeController = require('../controllers/productType.controller');

const path = '/productType';

ProductTypeRouter.get(path, ProductTypeController.getProductTypesController);
ProductTypeRouter.post(path, ProductTypeController.postProductTypeController);

module.exports = ProductTypeRouter;