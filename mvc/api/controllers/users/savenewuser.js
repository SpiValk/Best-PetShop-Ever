module.exports = {
  inputs: {
    username: {type: 'string', requires: true},
    password: {type: 'string', requires: true},
    // email
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/users/successfullregistration'
    }
  },

  fn: async function(inputs) {
    await User.create({username: inputs.username, password: inputs.password, isAdmin: false});
    return {};
  }
};

module.exports = {
  inputs: {
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
    email:    { type: 'string', required: true },

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
      email: inputs.email, isAdmin: 0,});
    return {};
  }
};
