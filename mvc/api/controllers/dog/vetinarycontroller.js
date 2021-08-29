module.exports = {
  inputs:{},

  exits:{
    success: {viewTemplatePath:'pages/dog/vetinary'}
  },

  fn: async function(){
    let dogVetinary=await Pet_product.find({product_category_id: 4})
    return {dogVetinary}

  }

};
