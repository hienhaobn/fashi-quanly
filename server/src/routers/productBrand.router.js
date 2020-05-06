const express = require('express');
const ProductBrandRouter = express.Router();

const ProductBrandController = require('../controllers/productBrand.controller');

const path = '/productBrand';

ProductBrandRouter.get(path, ProductBrandController.getProductBrandsController);
ProductBrandRouter.post(path, ProductBrandController.postProductBrandController);

module.exports = ProductBrandRouter;