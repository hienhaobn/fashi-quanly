const ProductBrandService = require('../services/productBrand.service');
module.exports = {
  'getProductBrandsController': async (req, resp) => {
    const dataProductBrand = await ProductBrandService.getProductBrandsService();
    if(!dataProductBrand || dataProductBrand[0] === null || dataProductBrand[0] === null){ 
      return resp.status( 500 ).json('Error get data from collection product brand!');
    } else {
      resp.status(200).json(dataProductBrand);
      return dataProductBrand;
    }
    
  },
  'postProductBrandController': (req, resp) => {
    if(!req.body){
      return resp.status( 400 ).json('Error get data from client');
    } else {
      if(req.body.name){
        const dataProductBrand = ProductBrandService.postProductBrandService(req.body);
        if(!dataProductBrand || dataProductBrand[0] === null || dataProductBrand[0] === null) {
          return resp.status( 500 ).json('Error get data name from service!');
        } 
        return resp.status(200).json(dataProductBrand);
      }
      return resp.status( 400 ).json('Error get data from client');
    }
    
  }
}