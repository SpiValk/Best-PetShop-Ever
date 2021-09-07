module.exports = {
    exits: {
      success: {
        viewTemplatePath: 'pages/users/loggedout'
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