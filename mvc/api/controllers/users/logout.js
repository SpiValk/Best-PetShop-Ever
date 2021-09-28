module.exports = {

  fn: async function(){
    if(this.req.session.email) {
      delete this.req.session.email;
      delete this.req.session.isAdmin;
    }
    // return {};
    return this.res.redirect('/');

  }
};
