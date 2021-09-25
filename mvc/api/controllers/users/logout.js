module.exports = {
   
    fn: async function(){
        if(this.req.session.username) {
            delete this.req.session.username
            delete this.req.session.isAdmin
        }
      // return {};
      return this.res.redirect('/home')

    }
  };