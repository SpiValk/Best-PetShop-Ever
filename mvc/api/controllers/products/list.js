


module.exports = {
  exits: {
    error: {},
    success: {
      viewTemplatePath: 'pages/products/list'
    }
  },

  //testing a way to get product category
  fn: async function(){
    let products = await Product.find();
    for(let product of products){
      let category = await Product_category.findOne({id: product.product_category});
      product.product_category = category.name;
    }
    return{
      products: products
    };


    //  return {
    //    products: await Product.find(),
    //    category: await Product_category.find()

    //  }; //, isLoggedIn: this.req.session.username, isAdmin: this.req.session.isAdmin};
  }
};
