module.exports = {

  inputs : {
    password: { type: 'string', required: true},
    email:    { type: 'string', required: true}
  },

  exits: {
    badCombo: {
      description: `The provided email and password combination does not
            match any user in the database.`,
      viewTemplatePath: 'errors/userNotFound'
    }},





  fn: async function(inputs) {

    let theUser = await User.findOne({email:inputs.email});
    if(!theUser){return this.res.view('errors/userNotFound'); }

    await sails.helpers.passwords.checkPassword(inputs.password, theUser.password).intercept('incorrect','badCombo');
    if(theUser.isAdmin) {
      this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
      this.req.session.email = inputs.email; // <----- This is the actual login!!!!! :0)
      this.req.session.userId = theUser.id;
      this.req.session.isAdmin = true;

    }
    if(!theUser.isAdmin) {
      this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
      this.req.session.email = inputs.email;
      this.req.session.userId = theUser.id;
      this.req.session.isAdmin = false;
    }
    this.res.redirect('/');
  }
};
