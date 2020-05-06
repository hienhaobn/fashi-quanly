const OrderProductEntity = require('../entity/orderProduct.entity');

module.exports = {
  'getOrderRepository': () => {
    let dataGet = OrderProductEntity.find();
    if(dataGet) return dataGet;
    return 'Error get order';
  }, 
  'postOrderRepository': async (dataOrder) => {
    let saveDataOrder = new OrderProductEntity(dataOrder);
    let statusSave = await saveDataOrder.save();
    if(statusSave) return saveDataOrder;
    return 'Error save order.';
  }
}