const OrderProductService = require('../services/orderProduct.service');
const GenerateDataOrder = require('../helper/generateDataOrder/index');
module.exports = {
  'getOrdersProductController': async (req, resp) => {
    let dataGet = await OrderProductService.getOrdersProductService();
    if(!dataGet) return resp.status(500).json('Error get data from collection order product.');
    if(dataGet.length === 0) return resp.status(500).json("Haven't data order product");
    return resp.status(200).json(dataGet);
  },
  'postOrderProductController': async (req, resp) => {
    let randomData = GenerateDataOrder.random_data();
    // if(!req.body) return resp.status(404).json('Error get data body from client.');
    
    if(randomData) {
      let dataPost = await OrderProductService.postOrderProductService(randomData);
      if (dataPost)  return resp.status(200).json(dataPost);
    }
    return resp.status(500).json('Error get data from collection order product.')
    
    
  }
}