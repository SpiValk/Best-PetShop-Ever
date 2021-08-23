module.exports = {
  inputs:{},
  exits:{
    success: {viewTemplatePath:'pages/dog'}
  },
  fn: async function(){
    return { dogProducts: await Pet_product.find()};

  }
};
