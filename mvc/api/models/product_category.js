
module.exports = {
  tableName: 'product_category',
  attributes: {
    category_name   : { type: 'string', columnName: 'category_name', required: true },
    description     : { type: 'string', columnName: 'description',   required: true },

    pet_product_id: {
      collection: 'pet_product',
      via:        'product_category_id'
    },

    pets_id: {
      model: 'pets'
    }
  }
};
