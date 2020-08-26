const express = require('express');
const ProductRouter = express.Router();
const path = require('path');
const ProductController = require('../controllers/product.controller');
const routerPath = '/product';
const uploadMulter = require('../helper/upload/upload');
// Handle upload file image

ProductRouter.get(routerPath, ProductController.getProductsController);
ProductRouter.post(routerPath, uploadMulter.single('myImage'), ProductController.postProductController);
ProductRouter.get(`${routerPath}/:id`,ProductController.getDetailProduct);
ProductRouter.put(routerPath, uploadMulter.single('myImage'),ProductController.editProductController);
ProductRouter.delete(routerPath, ProductController.deleteProductController)

module.exports = ProductRouter;