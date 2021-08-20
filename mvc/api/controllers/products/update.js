module.exports = {
  inputs: {
    id: { type: 'number', required: true },
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    costPrice: { type: 'number', required: true },
    quantity: { type: 'number', required: true },
  },

  fn: async function (inputs) {
    var updatedProduct;
    if (await Product.findOne(inputs.id)) {
      updatedProduct = await Product.updateOne({ id: inputs.id }).
                set({
                  name: inputs.name,
                  description: inputs.description,
                  costPrice: inputs.costPrice,
                  quantity: inputs.quantity,
                });
      this.res.redirect('/products');
    } else {
      updatedProduct = `Product with id: ${inputs.id} couldn't be updated. Does the product exist?`;
      this.res.status(404);
      return this.res.view('pages/products/notfound', { result: updatedProduct });
    }
  }
};
