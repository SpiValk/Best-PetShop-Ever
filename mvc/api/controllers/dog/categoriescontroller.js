/* eslint-disable camelcase */



module.exports = {
  description: 'Makes all product_category based controllers come through here',
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
    console.log(category);
    //finds the input category and brings all the pet_products in it
    let productCategory = await Product_category.findOne({category_name: category}).populate('pet_product_id');
    //take the array with all the products
    let dogProducts = await productCategory.pet_product_id;
    return this.res.view(`pages/dog/dogCategories`, {dogProducts, category});
  }

};
