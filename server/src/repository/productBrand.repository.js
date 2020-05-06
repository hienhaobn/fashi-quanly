const ProductBrandEntity = require('../entity/productBrand.entity');

module.exports = {
  'findProductBrands': () => {
    return ProductBrandEntity.find({});
  },
  'createProductBrand': (name) => {
    const dataProductBrand =  new ProductBrandEntity({name, status: true});
    dataProductBrand.save()
    .then(result => console.info(result))
    .catch(error => console.error(error))
    return dataProductBrand;
  },
  'saveProductBrandWithProductId': (productBrandId, productId) => {
    return ProductBrandEntity.findByIdAndUpdate({_id: productBrandId}, {$push: {product_id: productId}}, { new: true })
    .then()
    .catch(error => console.error(error));
  }
}