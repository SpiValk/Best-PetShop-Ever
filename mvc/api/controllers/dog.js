/* eslint-disable camelcase */
module.exports = {
  inputs:{},
  exits:{
    success: {viewTemplatePath:'pages/dog'}
  },
  fn: async function(){
    let dryFood = await Pet_product.find({subcategory_id: 1});
    let dogCans = await Pet_product.find({subcategory_id: 2});
    let dogTreats = await Pet_product.find({subcategory_id: 3});
    let dogCombing = await Pet_product.find({subcategory_id: 7});
    let dogDiapers = await Pet_product.find({subcategory_id:4});
    let dogWormers = await Pet_product.find({subcategory_id:5});

    return{dryFood, dogCans, dogTreats, dogCombing, dogDiapers, dogWormers};
  }
};
