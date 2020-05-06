const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  price: {
    type: Number,
    default: 0
  },
  old_price: {
    type: Number,
    default: 0
  },
  price_from: Date,
  price_to: Date,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date
});

module.exports = mongoose.model('Price', priceSchema);