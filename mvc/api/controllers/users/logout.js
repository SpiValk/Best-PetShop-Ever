module.exports = {

  fn: async function(){
    if(this.req.session.email) {
      delete this.req.session.isAdmin;
      delete this.req.session.email;
    }
    // return {};
    return this.res.redirect('/');

  }
};
