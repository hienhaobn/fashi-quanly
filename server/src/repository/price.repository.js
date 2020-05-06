const PriceEntity = require('../entity/price.entity');

module.exports = {
  'getPricesRepository': () => {
    return PriceEntity.find({});
  },
  'createPriceRepository': async (data, productId) => {
    let dataPrice = new PriceEntity({
      product_id: productId,
      price: data.price,
      old_price: data.old_price,
      price_from: data.price_from,
      price_to: data.price_to
    });
    await dataPrice.save();
    return dataPrice;
  }
}