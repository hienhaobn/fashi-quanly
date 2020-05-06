const ProductTypeEntity = require('../entity/productType.entity');

module.exports = {
  'findProductTypes': () => {
    return ProductTypeEntity.find({}).then().catch(error => console.error(error));
  },
  'createProductType': (name) => {
    let dataProductType =  new ProductTypeEntity({name, status: true});

    dataProductType.save()
    .then(result => console.info(result))
    .catch(error => console.error(error))
    return dataProductType;
  }
}