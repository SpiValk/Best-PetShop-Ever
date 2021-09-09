/* eslint-disable camelcase */
module.exports = {
  description: 'Makes all product_category based routes come through here',
  inputs:{
    category:{
      type: 'string',
      required: true
    }
  },
  exits:{
    //  success: {viewTemplatePath:'pages/dog/food'}
  },

  fn: async function({category}){
    const subCategs = await sails.helpers.getSubcategories();

    let productCategory = await Product_category.findOne({category_name: category}).populate('pet_product_id');
    let dogProducts = await productCategory.pet_product_id;

    return this.res.view(`pages/dog/dogCategories`, {dogProducts, category, subCategs});
  }

};
