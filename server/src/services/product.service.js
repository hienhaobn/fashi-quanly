const ProductRepository = require('../repository/product.repository');
const ProductAttributeRepository = require('../repository/productAttribute.repository');
const PriceRepository = require('../repository/price.repository');
const Validate = require('../helper/validate/attribute.validate');
const MapDataToDto = require('../dto/product.dto');
module.exports = {
  'getProductsService': async () => {
    const dataProducts = await ProductRepository.findProductsRepository();

    if(dataProducts){
      return dataProducts.map(dataProduct => MapDataToDto.mapEntityToDto(dataProduct));
      // return dataProducts
    }
    return Validate.validateGetDataFormDatabase();
  },
  'getDetailProduct': async (productId) => {
    const dataProduct = await ProductRepository.findProductBuyId(productId);
    const dataAttribute = await ProductAttributeRepository.getProductAttributeByProductIdRepository(productId);
    if(!dataProduct) return 'Error get data product';
    if(!dataAttribute) return 'Error get data product attribute';
    const data = {
      product: dataProduct,
      productAttributes: dataAttribute
    }
    if(dataProduct && dataAttribute){
      return data
    }
    return Validate.validateByDataFromClient();
  },
  'postProductService': async (dataProduct ,dataProductAttribute, urlImage) => {
    let dataSuccess = {
      product_name: dataProduct.product_name,
      image_product: urlImage,
      description: dataProduct.description,
      product_type_id: dataProduct.product_type_id,
      brand_id: dataProduct.brand_id,
      total_product: dataProduct.total_product,
      prices: dataProduct.prices
    };
    let saveDataProduct = await ProductRepository.createProductRepository(dataSuccess);
    let productId = saveDataProduct._id;
    let dataProductAttributes = [];
    await dataProductAttribute.map(async productAttribute => {
      let data =  await ProductAttributeRepository.createProductAttribute(productAttribute, productId);
      return dataProductAttributes.push(data);
    });
    const dataSave = {
      product: saveDataProduct,
      productAttributes: dataProductAttributes
    }
    return dataSave;

  },
  'editProductService': async (productId, dataEditProduct, dataEditProductAttributes, urlImage) => {
    let dataSaveProductAttributes = [];
    let dataSaveProduct = await ProductRepository.editProductRepository(productId, dataEditProduct, urlImage);
    await Promise.all(dataEditProductAttributes.map( async productAttribute => {
      let productAttributeId = productAttribute._id;
      let dataEditAttribute = {
        value: productAttribute.value,
        attribute_id: productAttribute.attribute_id,
        product_id:productAttribute.product_id
      };
      let data = await ProductAttributeRepository.editProductAttributeRepository(productAttributeId, dataEditAttribute);
      return dataSaveProductAttributes.push(data)
    }));
    const dataSave= {
      product: dataSaveProduct,
      productAttributes: dataSaveProductAttributes
    }
    return dataSave;
  },
  'deleteProductService': async (productId) => {
    console.log('delete---------',productId);
    if(productId){
      const statusDeleteProductAttribute = await ProductAttributeRepository.deleteProductAttributeRepository(productId);
      const statusDeleteProduct = await ProductRepository.deleteProductRepository(productId);
      if(statusDeleteProductAttribute && statusDeleteProduct) {
        return 'success'
      }
      return 'fail'
    }
    return 'fail'
  }
}