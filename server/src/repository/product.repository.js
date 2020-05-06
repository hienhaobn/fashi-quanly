const ProductEntity = require('../entity/product.entity');
const ProductAttributeEntity = require('../entity/productAttribute.entity');

module.exports = {
  'findProductsRepository': async () => {
    let dataProduct =  await ProductEntity.find({}).sort({created_at: -1})
    // .select('product_name image_product total_product active_sale prices')
    return dataProduct;
  },
  'findProductBuyId': async (productId) => {
    
    let dataProduct =  await ProductEntity.find({_id: productId})
    .populate({path: 'brand_id', select: 'name'})
    .populate({path: 'product_type_id', select: 'name'});
    return dataProduct;
  },
  'createProductRepository': (data) => {
    let dataProduct = new ProductEntity(data);
    dataProduct.save()
    .then(result => console.info(result))
    .catch(error => console.error(error));
    return dataProduct;
  },
  'editProductRepository': async (productId, dataProduct, urlImage) => {
    let dataSave = await ProductEntity.findByIdAndUpdate(productId, 
        {$set: {
          product_name: dataProduct.product_name,
          brand_id: dataProduct.brand_id,
          description: dataProduct.description,
          image_product: urlImage,
          product_type_id: dataProduct.product_type_id,
          total_product: dataProduct.total_product,
          active_sale: dataProduct.active_sale,
          prices: dataProduct.prices,
          updated_at: Date.now()}}, 
        {new: true});
    return dataSave;
  },
  'deleteProductRepository': (productId) => {
    return ProductEntity.findByIdAndDelete({_id: productId});
  }
}