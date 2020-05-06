const AttributeConstant = require('../constants/db.constant');

module.exports = {
  'getInfoAttribute': (attributes) => {
    return attributes.map( (attribute) => {
      AttributeConstant.Attribute.id = attribute._id;
      AttributeConstant.Attribute.name = attribute.name;
      AttributeConstant.Attribute.created_at = JSON.stringify(attribute.created_at).split('T')[0].split('"')[1]
      if(!attribute.updated_at) {
        return "Can't find updated_at";
      }
      AttributeConstant.Attribute.updated_at = JSON.stringify(attribute.updated_at).split('T')[0].split('"')[1]
      return AttributeConstant.Attribute;
    });
  },
  'getInfoAttributeById': (attribute) => {
    AttributeConstant.Attribute.id = attribute._id;
    AttributeConstant.Attribute.name = attribute.name;
    AttributeConstant.Attribute.created_at = JSON.stringify(attribute.created_at).split('T')[0].split('"')[1]
    if(!attribute.updated_at) {
      return "Can't find updated_at";
    }
    AttributeConstant.Attribute.updated_at = JSON.stringify(attribute.updated_at).split('T')[0].split('"')[1]
    return AttributeConstant.Attribute;
  }
}