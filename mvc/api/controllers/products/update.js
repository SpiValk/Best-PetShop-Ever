module.exports = {

  inputs: {
    id: { type: 'number', required: true },
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    quantity: { type: 'number', required: true },
    vendor_price: {type: 'number',required: true},
    retail_price: {type: 'number',required: true},
    status: {type: 'number',required: true},
  },

  fn: async function (inputs) {
    var updatedProduct;
    if (await Pet_product.findOne(inputs.id)) {
      updatedProduct = await Pet_product.updateOne({ id: inputs.id }).set({
        name: inputs.name,
        description: inputs.description,
        quantity: inputs.quantity,
        vendor_price: inputs.vendor_price,
        retail_price: inputs.retail_price,
        status: inputs.status
      });
      this.res.redirect('/products');
    } else {
      updatedProduct = `Product with id: ${inputs.id} couldn't be updated. Does the product exist?`;
      this.res.status(404);
      return this.res.view('pages/products/notfound', { result: updatedProduct });
    }
  }
};
