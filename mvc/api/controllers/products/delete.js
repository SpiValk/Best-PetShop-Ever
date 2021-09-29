module.exports = {
  inputs: {
    id: { type: 'number' },
  },

  fn: async function(inputs) {
    if(await Pet_product.findOne({id:inputs.id})) {
      await Pet_product.destroyOne({id:inputs.id});
      return this.res.redirect('/products');
    } else {
      var result = `Product with id: ${inputs.id} was not found.`;
      this.res.status(404);
      return this.res.view('pages/products/notfound', {result});
    }
  }
};
