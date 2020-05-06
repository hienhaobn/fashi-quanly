const mongoose = require('mongoose');

const productAttributeSchema = new mongoose.Schema({
  attribute_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Attribute'
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Product'
  },
  value: [{
    type: String
  }],
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date
});

module.exports = mongoose.model('ProductAttribute', productAttributeSchema);