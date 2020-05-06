const OrderItemService = require('../services/orderItem.service');

module.exports = {
  'getOderItemsController': async (req, resp) => {
    return resp.status(200).json(await OrderItemService.getOrderItemsService());
  }
}