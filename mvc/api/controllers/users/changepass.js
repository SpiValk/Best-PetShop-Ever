module.exports = {

  inputs:{
    oldPass: {type:'string', required: true},
    newPass: {type:'string', required: true},
    confirmPass: {type:'string', required: true}
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/users/changePass'
    },
    badCombo: {
      description: `The provided email and password combination does not
             match any user in the database.`,
      viewTemplatePath: 'errors/userNotFound'
    }
  },

  fn: async function({oldPass, newPass}) {
    const theUser = await User.findOne({id: this.req.session.userId});
    await sails.helpers.passwords.checkPassword(oldPass, theUser.password).intercept('incorrect', 'badCombo');
    await User.updateOne({id: this.req.session.userId}).set({password: await sails.helpers.passwords.hashPassword(newPass)});

    this.req.addFlash('passChange');

    return this.res.redirect('/');
  }
};
