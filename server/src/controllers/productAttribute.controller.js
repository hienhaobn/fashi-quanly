const ProductAttributeService = require('../services/productAttribute.service');

module.exports = {
  'getProductAttributesController' : async (req, resp) => {
    const dataProductAttributes = await ProductAttributeService.getProductAttributesService();
    if(!dataProductAttributes){
      return resp.status( 500 ).json('Error get data from collection product attribute');
      
    } else {
      resp.status(200).json(dataProductAttributes);
    } 
  },
  'postProductAttributeController': async (req, resp) => {
    if(!req.body) {
      return resp.status(400).json('Error get data from client');
    } else {
      if(req.body.product_id && req.body.attribute_id && req.body.value) {
        const dataProductAttribute = await ProductAttributeService.createProductAttributeService(req.body);
        if(!dataProductAttribute){
          return resp.status(500).json('Error post data to database');
        }
        return resp.status(200).json(dataProductAttribute);
      } else {
        return resp.status(400).json('Error get data from client');
      }
    }
   
  },
  'editProductAttributeController': async (req, resp) => {
    let productId = req.params.id;
    // console.log(req.body);
    const dataProductAttribute = await ProductAttributeService.editProductAttributeService(req.body, productId);
    return resp.status(200).json(dataProductAttribute);
  }
}