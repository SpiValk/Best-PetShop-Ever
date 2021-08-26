module.exports = {
  inputs:{},

  exits:{
    success: {viewTemplatePath:'pages/dog/grooming'}
  },

  fn: async function(){
    let dogGrooming = await Pet_product.find({product_category_id: 2});
    return {dogGrooming};
  }

};
