module.exports = {


  friendlyName: 'Get subcategories',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      outputFriendlyName: 'Subcategories',
    },

  },


  fn: async function (inputs, exits) {

    let allProductSubcategories = await Product_subcategory.find();
    let productSubcategories = [];
    for(let subcat of await allProductSubcategories){
      let subcatId = subcat.id;
      let subcatName = subcat.subcategory;
      let obj = {};
      obj[subcatId] = subcatName;
      productSubcategories.push(obj);
    }

    return exits.success(productSubcategories);

  }


};

