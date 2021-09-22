module.exports = {
  inputs: {
    username:        { type: 'string', required: true },
    password:        { type: 'string', required: true },
    email:           { type: 'string',  required: true },
    firstName:       { type: 'string', required: true },
    lastName:        { type: 'string', required: true },
    address:         { type: 'string', required: true },
    contact_number:  { type: 'string', required: true },

  },
  exits: {
    success: {
      viewTemplatePath: 'pages/users/successfullregistration'
    }
  },
  fn: async function(inputs) {
    // REMEMBER - npm install sails-hook-organics --save
    await User.create({
      username: inputs.username,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
      email: inputs.email,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      address:  inputs.address,
      contact_number: inputs.contact_number,
      isAdmin: 0,
    });
    return {};
  }
};
