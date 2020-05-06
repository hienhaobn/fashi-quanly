const OrderProductRepository = require('../repository/orderProduct.repository');
const OrderItemRepository = require('../repository/orderItem.repository');

module.exports = {
  'getOrdersProductService': async () => {
    let dataGetOrder = await OrderProductRepository.getOrderRepository();
    // let dataGetOrderItem = OrderItemRepository.getOrderItemByOrderIdRepository(dataGetOrder._id)
  //  return dataGetOrder.map( order => {
  //   console.log(order)
  //   // return order._id
  //  });
    if(dataGetOrder) return dataGetOrder
    return 'Error get data order product.';
  },
  'postOrderProductService': async (data) => {
    /**
     * post a order -> post a order product and many order item
     * order product 
     * item: [a,b,c]
     */
    
    if(!data.orderProduct) return 'Error get data from controller';
    let dataOrder = await OrderProductRepository.postOrderRepository(data.orderProduct);
    if(!dataOrder) return 'Error save data order product'
    let orderId = dataOrder._id;
    let dataItems = data.orderItem;
    await Promise.all(dataItems.map( async item => {
      let productId = item.product_id;
      await OrderItemRepository.postOrderItemRepository(item, orderId, productId);
    }));
    return dataOrder;
  }
}