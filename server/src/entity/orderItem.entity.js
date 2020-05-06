const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  order_id: {
    type: mongoose.Types.ObjectId,
    ref: 'OrderProduct'
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  size: String, 
  color: String,
  quantity: Number,
});

module.exports = mongoose.model('OrderItem', orderItemSchema);