const mongoose = require('mongoose');

const orderProductSchema = new mongoose.Schema({
  user_id : {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  name_from : String,
  name_to : String,
  address_from : String,
  address_to : String,
  email : String,
  phone : String,
  total_money : Number,
  total_order_product: Number,
  active : String,
  created_at : {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('OrderProduct', orderProductSchema);