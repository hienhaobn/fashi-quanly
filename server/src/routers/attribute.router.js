const express = require('express');
const AttributeRouter = express.Router();

const AttributeController = require('../controllers/attribute.controller');

const path = '/attribute';

AttributeRouter.get(path, AttributeController.getAttributesController)
AttributeRouter.get(`${path}/:id`, AttributeController.getAttributeController)
AttributeRouter.post(path, AttributeController.postAttributeController);
AttributeRouter.put(`${path}/:id`, AttributeController.editAttributeController);
AttributeRouter.delete(`${path}/:id`, AttributeController.removeAttributeController);

module.exports = AttributeRouter;