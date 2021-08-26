
module.exports = {
  tableName: 'pet_product',
  attributes: {
    name          : { type: 'string',  columnName: 'name',         required: true },
    description   : { type: 'string',  columnName: 'description',  required: true },
    quantity      : { type: 'number',  columnName: 'quantity',     required: true },
    vendor_price  : { type: 'number',  columnName: 'vendor_price', required: true },
    image_name    : { type: 'string',  columnName: 'image_name',   required: true },
    status        : { type: 'number',  columnName: 'status',       required: true },

    discount_id: {
      collection: 'discount',
      via:        'pet_product_id'
    },

    vendor_id: {
      model: 'vendor'
    },

    product_category_id:{
      model:'product_category'
    },

    order_id: {
      collection: 'order',
      via:        'product_id',
      through:    'order_products'
    },

    subcategory_id: {
      model: 'product_subcategory'
    },

    pet_id: {
      model: 'pets',
    }
  }
};
