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
    //  if(!this.req.session.isAdmin) {
    //    return this.res.view(`pages/dog/dogCategories`, {dogProducts, category, subCategs, isAdmin: false});

    //  } else {


    const subCategs = await sails.helpers.getSubcategories();

    let subcategoryTemp = await Product_category.findOne({category_name: category}).populate('subcategory_id');
    let subcategories = subcategoryTemp.subcategory_id;

    let productCategory = await Product_category.findOne({category_name: category}).populate('pet_product_id');
    let dogProducts = await productCategory.pet_product_id;




    return this.res.view(`pages/dog/dogCategories`, {dogProducts, category, subCategs, subcategories, isAdmin: this.req.session.isAdmin});

    //  }

  }

};
