const ProductAttributeRepository = require('../repository/productAttribute.repository');
const AttributeRepository = require('../repository/attribute.reponsitory');
module.exports = {
  'getProductAttributesService': async () => {
    const dataProductAttribute = await ProductAttributeRepository.getProductAttributesRepository();
    if(!dataProductAttribute) {
      return "Can't get data product attribute from repository"
    }
    return dataProductAttribute;
  },
  'createProductAttributeService': async (body) => {
    let data = {
      attribute_id: body.attribute_id,
      product_id: body.product_id,
      value: JSON.parse(body.value)
    }
    const dataProductAttribute = ProductAttributeRepository.createProductAttribute(data);
    if(!dataProductAttribute){
      return "Error save product attribute from product attribute service!"
    }
    return dataProductAttribute;
  },
  'editProductAttributeService': (productAttributeId, data) => {
    const dataProductAttribute = ProductAttributeRepository.editProductAttributeRepository(productAttributeId, data);
    return dataProductAttribute;
  }
}