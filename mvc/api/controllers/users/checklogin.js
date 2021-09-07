module.exports = {

    inputs : {
        username: { type: 'string'},
        password: { type: 'string'}
    },

    
  
    fn: async function({username, password}){
        let theUser =  await User.findOne({username}) 
        // if (username == 'admin' && password == 'admin') {
        if(theUser.isAdmin) {
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.username = username    // <-- login
            this.req.session.isAdmin = true
            // if (sails.hooks.sockets) {
            //     await sails.helpers.broadcastSessionChange(this.req)
            // }
        }
        if(!theUser.isAdmin){
        // if(username == 'user' && password == 'user') {
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.username = username
            this.req.session.isAdmin = false

        }
        this.res.redirect('/')
    }
  };