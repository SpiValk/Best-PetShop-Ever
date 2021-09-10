module.exports = {


  friendlyName: 'Product categories',


  description: 'Returns an array with objects that each key matches the id and each value the category_name of each category',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    let allProductCategories = await Product_category.find();
    let productCategories = [];
    for(let categ of await allProductCategories){
      let categoryId = categ.id;
      let categoryName = categ.category_name;
      let obj = {};
      obj[categoryId] = categoryName;
      productCategories.push(obj);
    }
    return exits.success(productCategories);
  }


};

