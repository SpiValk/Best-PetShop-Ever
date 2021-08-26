/* eslint-disable camelcase */



module.exports = {
  inputs:{},

  exits:{
    success: {viewTemplatePath:'pages/dog/food'}
  },

  fn: async function(){

    // dogFood: await Pet_product.find({product_category_id: 1})
    let dogFood = await Pet_product.find({product_category_id: 1});
    return {dogFood};
  }

};
