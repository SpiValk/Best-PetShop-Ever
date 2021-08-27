module.exports = {
  inputs:{},

  exits:{
    success: {viewTemplatePath:'pages/dog/accessories'}
  },

  fn: async function(){
    let dogAccessories = await Pet_product.find({product_category_id: 3});
    return {dogAccessories};
  }

};
  