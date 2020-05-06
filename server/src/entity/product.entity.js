const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  image_product: {
    type: String,
  },
  description: String,
  product_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductType"
  },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductBrand"
  },
  total_product: {
    type: Number,
    default: 0
  },
  active_sale: {
    type: Boolean,
    default: false
  },
  prices: [],
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: Date,
});

module.exports = mongoose.model('Product', productSchema);