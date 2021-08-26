/* eslint-disable camelcase */

module.exports = {
  inputs:{},
  exits:{
    success: {viewTemplatePath:'pages/dog'}
  },

  fn: async function(){
    let dogProducts = await Pet_product.find({pet_id: 1}).populate('pet_id').populate('product_category_id');
    // await dogProducts[0].pet_id.name //Returns: dog
    return{dogProducts};
  }

};
