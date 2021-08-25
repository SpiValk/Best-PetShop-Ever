module.exports = {
    inputs:{},
    exits:{
      success: {viewTemplatePath:'pages/cat'}
    },
    fn: async function(){
      let dryFood = await Pet_product.find({subcategory_id: 1});
      let catCans = await Pet_product.find({subcategory_id: 2});
      let catTreats = await Pet_product.find({subcategory_id: 3});
      return{dryFood, catCans, catTreats};
    }
  };