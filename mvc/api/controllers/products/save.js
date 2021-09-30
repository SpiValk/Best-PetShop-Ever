/* eslint-disable camelcase */
module.exports = {
  files: ['image'], //no fuckin idea what this is

  inputs: {
    name: {type:'string', required: true},
    description: {type:'string', required: true},
    quantity: {type: 'number', required: true},
    vendorPrice: {type: 'number', required: true},
    retailPrice: {type: 'number', required: true},
    status: {type: 'number', required: true},
    vendor: {type: 'number', required: true},
    category: {type: 'string', required: true},
    subcategory: {type: 'string', required: true},
    pet: {type: 'string', required: true},
    image: {
      type: 'ref',
      description: 'Uploaded file stream',
      required: true,
    }
  },

  exits: {
    success: {

    },

    badRequest:{
      description: 'No image upload was provided.',
      responseType: 'badRequest'
    }
  },

  fn: async function(inputs, exits){

    //bring in the helpers to get the names out of the inputs.ids
    const categs = await sails.helpers.getCategories();
    const category = categs[inputs.category -1][inputs.category];

    const allPets = await sails.helpers.getPets();
    const pet = allPets[inputs.pet -1][inputs.pet];

    const subCategs = await sails.helpers.getSubcategories();
    const subCategory = subCategs[inputs.subcategory -1][inputs.subcategory];



    await inputs.image.upload({
      dirname: require('path').resolve(sails.config.appPath, `assets/img/product_images/${pet}/${category}/${subCategory}`) //the path for the image to be saved
    },async (err, uploadedFile) => {
      if(err) {return 'badRequest';}
      if(uploadedFile.length === 0) {return 'No image was uploaded!';}

      const fdIntoArray = uploadedFile[0].fd.split('/');
      const hashedImageName = fdIntoArray[fdIntoArray.length - 1]; //image name for the Pet_product.create()

      await Pet_product.create({
        name: inputs.name,
        description: inputs.description,
        quantity: inputs.quantity,
        vendor_price: inputs.vendorPrice,
        retail_price: inputs.retailPrice,
        image_name: hashedImageName,
        status: inputs.status,
        product_category_id: inputs.category,
        subcategory_id: inputs.subcategory,
        pet_id: inputs.pet
      });


      return exits.success();
    });

  }
};

