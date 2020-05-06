module.exports = {
  'Attribute': {
    _id: String,
    name: String,
    created_at: String,
    updated_at: String
  },
  'ProductBrand': {
    _id: String,
    name: String,
    status: Boolean,
    created_at: Date,
    updated_at: Date
  },
  'Product': {
    _id: String,
    product_name: String,
    image_product: String,
    description: String,
    attribute: String,
    product_type: String,
    product_brand: String,
    total_product: Number,
    active_sale: Boolean,
    price: Number,
    old_price: Number,
    price_from: Date,
    price_to: Date,
    created_at: Date,
    updated_at: Date
  }
}