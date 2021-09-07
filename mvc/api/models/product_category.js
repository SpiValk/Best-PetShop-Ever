
module.exports = {
  tableName: 'product_category',
  attributes: {
    category_name   : { type: 'string', columnName: 'category_name', required: true },
    description     : { type: 'string', columnName: 'description',   required: true },
    product_image   : { type: 'string', columnName: 'product_image'                 },

    pet_product_id: {
      collection: 'pet_product',
      via:        'product_category_id'
    },

    pets_id: {
      model: 'pets'
    },

    subcategory_id: {
      collection: 'product_subcategory',
      via: 'category_id'
    },
  }
};
