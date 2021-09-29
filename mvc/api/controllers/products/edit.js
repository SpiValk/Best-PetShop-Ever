module.exports = {
  inputs: {
    id: { type: 'number', required: true}
  },
  exits: {
    success: {
      viewTemplatePath: 'pages/products/edit'
    }
  },

  fn: async function(inputs) {
    var dbProduct = await Pet_product.findOne(inputs.id);
    return { product: dbProduct };
  }
};
