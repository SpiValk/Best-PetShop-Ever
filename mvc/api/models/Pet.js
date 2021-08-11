module.exports = {
    attributes: {
      breed: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
  
      // Add a reference to User
      owner: {
        model: 'user'
      }
    }
  };