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
    let productCategory = await Product_category.findOne({category_name: category}).populate('pet_product_id');
    let products = await productCategory.pet_product_id;
    let dogProducts = [];

    let subcategoryTemp=await Product_category.findOne({category_name: category}).populate('subcategory_id');
    let subcategories=subcategoryTemp.subcategory_id

    for(let product of products){
      dogProducts.push(await Pet_product.findOne({name: product.name}).populate('subcategory_id'));
    }


    return this.res.view(`pages/dog/dogCategories`, {dogProducts, category,subcategories});
  }

};
