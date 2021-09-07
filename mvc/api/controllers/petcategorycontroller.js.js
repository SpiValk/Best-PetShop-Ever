module.exports = {
  inputs: {
    pet: {
      type: 'string',
      required: true
    }
  },

  fn: async function({pet}){
    let findCategories = await Pets.findOne({name: pet}).populate('product_category_id');
    let petCategories=await findCategories.product_category_id;
    return this.res.view(`pages/petcategories`, {petCategories,pet});
  },
};