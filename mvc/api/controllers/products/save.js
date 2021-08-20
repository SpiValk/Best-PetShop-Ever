/* eslint-disable camelcase */
module.exports = {
  inputs: {
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    costPrice: { type: 'number',  columnType:'FLOAT', required: true },
    quantity: { type: 'number', required: true },
    product_category: { type: 'string', required: true },
  },

  fn: async function (inputs) {
    await Product.create({
      name: inputs.name,
      description: inputs.description,
      costPrice: inputs.costPrice,
      quantity: inputs.quantity,
      product_category: inputs.product_category
    });
    this.res.redirect('/products');
  }
};
