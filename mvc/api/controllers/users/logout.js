module.exports = {
    exits: {
      success: {
        viewTemplatePath: '/pages/static/loggedout'
      }
    },
  
    fn: async function(){
        if(this.req.session.username) {
            delete this.req.session.username
            delete this.req.session.isAdmin
        }
      return {};
    }
  };