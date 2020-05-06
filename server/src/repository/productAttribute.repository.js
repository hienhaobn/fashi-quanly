const ProductAttributeEntity = require('../entity/productAttribute.entity');

module.exports = {
  'getProductAttributesRepository': () => {
    return ProductAttributeEntity.find({});
  },
  'getProductAttributeByProductIdRepository': async (productId) => {
    return ProductAttributeEntity.find({product_id: productId });
  },
  'createProductAttribute': (data, productId) => {
    let dataProductAttribute = new ProductAttributeEntity({
      attribute_id: data.attribute_id,
      value: data.value,
      product_id: productId
    });
    dataProductAttribute.save().then(result => console.info(result)).catch(error => console.error(error));
    return dataProductAttribute;
  },
  'editProductAttributeRepository': async (productAttributeId, dataProductAttribute) => {
    let dataEdit = await ProductAttributeEntity.findByIdAndUpdate({_id: productAttributeId}, 
      {$set: {
        value: dataProductAttribute.value,
        attribute_id: dataProductAttribute.attribute_id,
        product_id: dataProductAttribute.product_id,
        updated_at: Date.now()
      }}, 
      {new: true});
    return dataEdit;
  },
  'deleteProductAttributeRepository': (productId) => {
    return ProductAttributeEntity.deleteOne({product_id: productId})
  }
}





