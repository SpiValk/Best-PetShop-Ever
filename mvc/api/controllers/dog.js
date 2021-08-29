module.exports = {
  inputs:{},
  exits:{
    success: {viewTemplatePath:'pages/dog'}
  },
  fn: async function(){
    let dryFood = await Pet_product.find({subcategory_id: 1});
    let dogCans = await Pet_product.find({subcategory_id: 2});
    let dogTreats = await Pet_product.find({subcategory_id: 3});
    return{dryFood, dogCans, dogTreats};
  }
};

