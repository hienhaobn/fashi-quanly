const AttributeRepository = require('../repository/attribute.reponsitory');
const AttributeDTO = require('../dto/attribute.dto');

const Validate = require('../helper/validate/attribute.validate');

module.exports = {
  'getAttributesService': async () => {
    const attributes = await AttributeRepository.findAttributesRepository();
    if(!attributes) {
      return Validate.validateGetDataFormDatabase();
    }
    return attributes;

  },
  'getAttributeByIdService': async (id) => {
    const attributes = await AttributeRepository.findAttributeByIdRepository(id);

    if(!attributes) {
      return Validate.validateGetDataFormDatabase();
    }
    return AttributeDTO.getInfoAttribute(attributes)
  },
  'postAttributeService': async (body) => {
    if(!body){
      return Validate.validateDataBody();
    }
    if(!body.name){
      return Validate.validateByDataFromClient("Can't get name from client");
    }
    
    const dataAttribute = await AttributeRepository.postAttributeRepository(body);
    // return AttributeDTO.getInfoAttributeById(dataAttribute);
    return dataAttribute;
  },
  'editAttributeService': async (id,body) => {
    if(!body){
      return Validate.validateDataBody();
    }
    if(!body.name){
      return Validate.validateByDataFromClient("Can't get name from client");
    }
    if(!id) {
      return Validate.validateById();
    }
    const dataEditAttribute = await AttributeRepository.editAttributeRepository(id, body);
    return AttributeDTO.getInfoAttributeById(dataEditAttribute);
  },
  'removeAttributeService': (id) => {
    if(!id) {
      Validate.validateById();
    }
    return AttributeRepository.removeAttributeRepository(id);
  }
}
