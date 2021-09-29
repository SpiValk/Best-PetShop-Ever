module.exports = {
  inputs: {
    id: { type: 'number', required: true}
  },
  exits: {
    success: {
      // viewTemplatePath: 'pages/products/edit'
    }
  },

  fn: async function(inputs) {
    var product = await Pet_product.findOne(inputs.id);

    return this.res.view('pages/products/edit',{product});
  }
};
