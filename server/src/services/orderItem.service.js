const OrderItemRepository = require('../repository/orderItem.repository');

module.exports = {
  'getOrderItemsService': () => {
    return OrderItemRepository.getOrderItemRepository();
  }
}

