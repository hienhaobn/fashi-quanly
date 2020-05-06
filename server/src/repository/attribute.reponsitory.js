const AttributeEntity = require('../entity/attribute.entity');
const Validate = require('../helper/validate/attribute.validate');

module.exports = {
  'findAttributesRepository': async () => {
    return AttributeEntity.find({});
  },
  'findAttributeByIdRepository': async (attributeId) => {
    const dataAttributeGetById = await AttributeEntity.find({_id: attributeId});
    if(!dataAttributeGetById) {
      Validate.validateGetDataFormDatabase('Error find id from database');
    }
    return dataAttributeGetById;
  },
  'postAttributeRepository': (body) => {
    let attribute = new AttributeEntity({
      name: body.name,
      created_at: Date.now()
    });
    attribute.save( (error) => {
      if(error)
       return error;
    });
    return attribute;
  },
  'editAttributeRepository': async (attributeId, body) => {
    const dataEditAttribute = await AttributeEntity.findByIdAndUpdate({_id: attributeId}, {$set: {name: body.name, updated_at: Date.now()}}, {new: true})
    if(!dataEditAttribute) {
      Validate.validateSaveDataToDatabase('Error edit data form database');
    }
    return dataEditAttribute;
  },
  'removeAttributeRepository': async (attributeId) => {
    const dataRemoveAttribute = await AttributeEntity.findByIdAndRemove({_id: attributeId});
    if(!dataRemoveAttribute){
      Validate.validateGetDataFormDatabase('Error remove data from database');
    }
  },
  'saveAttributeWithProductAttributeId': async (attributeId, productAttributeId) => {
    return AttributeEntity.updateOne({_id: attributeId}, {$push: {product_attribute_id: productAttributeId}}, { new: true });
    
  }
}
