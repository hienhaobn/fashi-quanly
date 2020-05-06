const PriceService = require('../services/price.service');

module.exports = {
  'getPricesController': async (req, resp) => {
    let dataPrice = await PriceService.getPricesService();
    if(dataPrice) {
      return resp.status(200).json(dataPrice);
    }
    return resp.status(500).json("Error get data from collection price.")
  }, 
  'postPriceController': (req, resp) => {
    if(!req.body){
      if(req.body.product_id) {
        return resp.status(403).json("Error get product id form client");
      }
      return resp.status(400).json("Error get data body from client");
    } else {
      let dataPrice = PriceService.postPriceService(req.body);
      if(dataPrice) {
        return resp.status(200).json(dataPrice);
      }
        return resp.status(500).json("Error get data from collection price");
      }
    
  }
}