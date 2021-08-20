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
    var dbProduct = await Product.findOne(inputs.id);
    return { product: dbProduct };
  }
};
