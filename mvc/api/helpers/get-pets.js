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
    let allPets = Pets.find();
    let pets = [];
    for(let pet of await allPets){
      let petId = pet.id;
      let petName = pet.name;
      let obj = {};
      obj[petId] = petName;
      pets.push(obj);
    }
    return exits.success(pets);
  }


};

