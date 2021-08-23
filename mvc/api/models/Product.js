/* eslint-disable camelcase */
module.exports = {
  tableName: 'products',
  attributes: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    costPrice: { type: 'number', required: true },
    quantity: { type: 'number', required: true },

    product_category: {
      model: 'product_category',
    },
    discount_id: {
      model: 'discount'
    }
  },


//   product_supplier: {
//     model: 'Supplier',
//   },
//   product_discount: {
//     model: 'discount',
//   },
};
