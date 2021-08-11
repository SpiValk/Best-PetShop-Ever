module.exports = {
    attributes: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
  
      // Add a reference to Pets
      pets: {
        collection: 'pet',
        via: 'owner'
      }
    }
  };