/* eslint-disable camelcase */
module.exports = {
  files: ['image'],

  inputs: {
    id: {type:'number', required:true},
    name: {type:'string', required: true},
    description: {type:'string', required: true},
    quantity: {type: 'number', required: true},
    vendorPrice: {type: 'number', required: true},
    retailPrice: {type: 'number', required: true},
    status: {type: 'number', required: true},
    vendor: {type: 'number', required: true},
    image: {
      type: 'ref',
      description: 'Uploaded file stream',
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


    await inputs.image.upload({
      dirname: require('path').resolve(sails.config.appPath, `assets/img/product_images/${pet}/${category}/${subCategory}`) //the path for the image to be saved
    },async (err, uploadedFile) => {
      if(err) {return 'badRequest';}
      if(uploadedFile.length === 0) {return 'No image was uploaded!';}

      const fdIntoArray = uploadedFile[0].fd.split('/');
      const hashedImageName = fdIntoArray[fdIntoArray.length - 1]; //image name for the Pet_product.create()

      await Pet_product.updateOne({id: inputs.id}).set({
        name: inputs.name,
        description: inputs.description,
        quantity: inputs.quantity,
        vendor_price: inputs.vendorPrice,
        retail_price: inputs.retailPrice,
        image_name: hashedImageName,
        status: inputs.status,
      });





      return exits.success();
    });

  }
};

