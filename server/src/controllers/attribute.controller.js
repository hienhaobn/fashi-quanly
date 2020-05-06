const AttributeService = require('../services/attribute.service');

const AttributeValidate = require('../helper/validate/attribute.validate');
module.exports = {

  'getAttributesController': async (req, resp) => {
    const attributes = await AttributeService.getAttributesService();
    if(!attributes) {
      resp.status(500).json(AttributeValidate.validateGetDataFormDatabase('Get data from server fail'));
    }
    resp.status(200).json(AttributeValidate.statusSuccess('Get all data from collection Attribute!', attributes));
  },

  'getAttributeController': async (req, resp) => {
    let id = req.params.id;
    if (!id) {
      resp.json(AttributeValidate.validateById());
    }
    const attribute = await AttributeService.getAttributeByIdService(id);
    resp.status(200).json(AttributeValidate.statusSuccess('Find a document from collection Attribute!', attribute));
  },

  'postAttributeController': async (req, resp) => {
    if(!req.body){
      resp.status( 400 ).json('Error get data from client');
    } else {
      if(!req.body.name) {
        resp.status( 403 ).json('Error get name from client');
      } else {
        const attributePost = await AttributeService.postAttributeService(req.body);
        resp.status(200).json(AttributeValidate.statusSuccess('Post a document form client to collection Attribute!', attributePost));
      }
    }
  },

  'editAttributeController': async (req, resp) => {
    const id = req.params.id;
    let body = req.body;
    if (!id) {
      resp.json(AttributeValidate.validateById());
      return;
    }
    if(!body) {
      resp.json(AttributeValidate.validateDataBody());
      return;
    } else {
      if(body.name && id) {
        const attributeEdit = await AttributeService.editAttributeService(id, body);
        resp.json(AttributeValidate.statusSuccess(`Edited a record with id = ${id}`, attributeEdit));
      }
    }
  },

  'removeAttributeController': async (req, resp) => {
    const id = req.params.id;
    if (!id) {
      resp.json(AttributeValidate.validateById());
    }
    const attributeRemove =  await AttributeService.removeAttributeService(id);
    return resp.json(AttributeValidate.statusSuccess(`Removed a record with id = ${id}`, attributeRemove));
  }
}
