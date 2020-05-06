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
  }
}