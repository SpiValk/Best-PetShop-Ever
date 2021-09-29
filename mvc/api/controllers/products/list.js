module.exports = {

  //testing a way to get product category
  fn: async function(){
    let products = await Pet_product.find();
    return this.res.view('pages/products/list', {products});
  }
};
