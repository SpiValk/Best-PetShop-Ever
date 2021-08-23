
module.exports = {
  tableName: 'pet_product',
  attributes: {
    name          : { type: 'string',  columnName: 'name',         required: true },
    description   : { type: 'string',  columnName: 'description',  required: true },
    quantity      : { type: 'number',  columnName: 'quantity',     required: true },
    vendor_price  : { type: 'number',  columnName: 'vendor_price', required: true },
    image_name    : { type: 'string',  columnName: 'image_name',   required: true },
    status        : { type: 'number',  columnName: 'status',       required: true },


    discount: {
      collection: 'discount',
      via:        'pet_product'
    },

    vendor: {
      collection: 'vendor',
      via:        'pet_product'
    },

    product_category: {
      collection: 'product_category',
      via:        'pet_product'
    },

    order_id: {
      collection: 'order',
      via:        'product',
      through:    'order_products'
    }
  }
};
