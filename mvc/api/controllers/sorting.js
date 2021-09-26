module.exports={
  inputs:{
    pet: {type: 'string'},
    // category: {type: "string"},
    subcategory: {type: 'string'},
    filtering: {type: 'string'},
    order: {type: 'string'}
  },

  fn: async function({pet, subcategory, filtering, order}){

    const subcategories = await sails.helpers.getSubcategories();

    //Get the id  from subcategory name
    let subcategoryId;
    for(const index in subcategories){
      const mySubcategory = subcategories[index][parseInt(index) + 1];
      if( subcategory === mySubcategory){
        subcategoryId = parseInt(index) + 1;
      }
    }
    //---------//

    const filteredProducts = await Pet_product.find({subcategory_id: subcategoryId}).sort(`${filtering} ${order}`);

    //  return this.res.view(`pages/dog/dogSubcategories`, {dogProducts, category, subcategory}); // ??
  }


};
