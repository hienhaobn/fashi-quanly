const ProductBrandRepository = require('../repository/productBrand.repository');
module.exports = {
  'getProductBrandsService': async () => {
    const dataProductBrand =  ProductBrandRepository.findProductBrands();
    if(!dataProductBrand) {
      return "Error get data from repository";
    }
    return dataProductBrand;
  },
  'postProductBrandService': async (body) => {
    const dataProductBrand = await ProductBrandRepository.createProductBrand(body.name);
    if(!dataProductBrand) {
      return "Can't post data form repository";
    }
    return dataProductBrand;
  }
}