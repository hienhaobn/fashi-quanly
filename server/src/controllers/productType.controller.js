const ProductTypeService = require('../services/productType.service');

module.exports = {
  'getProductTypesController': async (req, resp) => {
    const dataProductType = await ProductTypeService.getProductTypesRepository();
    if(!dataProductType || dataProductType[0] === null || dataProductType[0] === undefined){ 
      return resp.status( 500 ).json('Error get data from collection product type!');
    } else {
      return resp.status(200).json(dataProductType);
    }
  },
  'postProductTypeController': (req, resp) => {
    if(!req.body){
      return resp.status( 400 ).json('Error get data from client');
    } else {
      if(!req.body.name) {
        return resp.status( 400 ).json('Error get name from client');
      } else {
        const dataProductType = ProductTypeService.postProductTypeRepository(req.body);
        if(!dataProductType || dataProductType[0] === null || dataProductType[0] === null) {
          return resp.status( 500 ).json('Error save data to collection product type');
        } 
        return resp.status(200).json(dataProductType);
      }
    }
  }
}