/* eslint-disable camelcase */



module.exports = {
  description: 'Makes all product_subcategory based controllers come through here',
  inputs:{
    subcategory:{
      type: 'string',
      required: true
    },

  },

  fn: async function({subcategory}){
    //finds the input category and brings all the pet_products in it
    let productSubcategory = await Product_subcategory.findOne({subcategory: subcategory}).populate('pet_product_id');
    let categoryTemp = await Product_subcategory.findOne({subcategory: subcategory}).populate('category_id');



    //take the array with all the products
    let dogProducts = await productSubcategory.pet_product_id;
    let category = await categoryTemp.category_id.category_name;

    return this.res.view(`pages/dog/dogSubcategories`, {dogProducts, category, subcategory});
  }

};
