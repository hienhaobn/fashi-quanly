const isArray = require('isarray');
const ProductConstant = require('../constants/db.constant');
module.exports = {
  'mapEntityToDto': (data) => {
    // // let dataProduct = {...data};
    // let result = JSON.parse(JSON.stringify(data, (key, value) => {
    //   if(key === "prices") {
    //     return undefined;
    //   }
    //   return value;
    // }));

    // // if(!!dataProduct._doc.prices && !!dataProduct._doc.prices.length) {
    // //   result = {...result, ...dataProduct._doc.prices[0]}
    // //   console.log('-------',result);
    // // } 
    // if(data.prices && data.prices.length) {
    //   result = {...result, ...data.prices[0]}
    // }
    // return result;
    let product = {
      _id: String,
      product_name: String,
      image_product: String,
      description: String,
      product_type_id: String,
      brand_id: String,
      total_product: Number,
      active_sale: Boolean,
      created_at: Date,
      updated_at: Date
      
    }
    product._id = data._id;
    product.product_name = data.product_name;
    product.image_product = data.image_product;
    product.total_product = data.total_product;
    product.active_sale = data.active_sale;
    product.prices = data.prices;
    product.description = data.description;
    product.product_type_id = data.product_type_id;
    product.brand_id = data.brand_id;
    product.created_at = data.created_at;
    product.updated_at = data.updated_at;
    
    return product;
  },
  'mapDetailProduct': (data) =>{
    let attribute = {
      name: String,
      value: String
    }
    const Product = ProductConstant.Product;
    const dataProduct = data.product;
    const dataAttribute = data.productAttribute;
    Product._id = dataProduct[0]._id;
    Product.product_name = dataProduct[0].product_name;
    Product.image_product = dataProduct[0].ima;
    Product.description = dataProduct[0].description;
    Product.attribute = dataAttribute.map( at => {
      attribute.value = at.value;
      attribute.name = at.attribute_id.name;
      return attribute
    });
    Product.product_type = dataProduct[0].product_type_id.name;
    Product.product_brand = dataProduct[0].brand_id.name;
    Product.total_product = dataProduct[0].total_product;
    Product.active_sale = dataProduct[0].active_sale;
    Product.prices = dataProduct[0].prices;
    Product.created_at = dataProduct[0].created_at;
    Product.updated_at = dataProduct[0].updated_at;
    return Product;
  } 
}