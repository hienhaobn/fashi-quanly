const OrderItemEntity = require('../entity/orderItem.entity');

module.exports = {
  'getOrderItemRepository': () => {
    let dataGet = OrderItemEntity.find();
    if(dataGet) return dataGet;
    return 'Error get order item';
  },
  'getOrderItemByOrderIdRepository': (orderId) => {
    let dataGet = OrderItemEntity.find({order_id: orderId});
    if(dataGet) return dataGet;
    return 'Error get order item';
  },
  'postOrderItemRepository': async (dataItem, orderProductId, productId) => {
    let saveDataOrderItem = new OrderItemEntity({
      order_id: orderProductId,
      product_id: productId,
      size: dataItem.size,
      color: dataItem.color,
      quantity: dataItem.quantity
    });
    let statusSave =  await saveDataOrderItem.save();
    if(statusSave) return saveDataOrderItem;
    return 'Error save order item.';
  }
}

