const express = require('express');
const ProductAttributeRouter = express.Router();

const ProductAttributeController = require('../controllers/productAttribute.controller');
const path = '/productAttribute';

ProductAttributeRouter.get(path, ProductAttributeController.getProductAttributesController);
ProductAttributeRouter.post(path, ProductAttributeController.postProductAttributeController);
ProductAttributeRouter.put(`${path}/:id`, ProductAttributeController.editProductAttributeController);
module.exports = ProductAttributeRouter;