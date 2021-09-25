module.exports = {

    inputs : {
        password: { type: 'string', required:true},
        email:    { type: 'string', required:true}
    },

    exits: {
        badCombo: {
            description: `The provided email and password combination does not
            match any user in the database.`,
            responseType: 'unauthorized'
        }},

    
  
//     


fn: async function({email, password}) {
        
    let theUser = await User.findOne({email})
    await sails.helpers.passwords.checkPassword(password, theUser.password).intercept('incorrect', 'badCombo')
    if(theUser.isAdmin) {
        console.log(this.req.session)
        this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
        this.req.session.email = email; // <----- This is the actual login!!!!! :0)
        this.req.session.userId = theUser.id
        this.req.session.isAdmin = true
       
    }
    if(!theUser.isAdmin) {
        this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
        this.req.session.email = email;
        this.req.session.userId = theUser.id
        this.req.session.isAdmin = false
    }

    this.res.redirect('/')    
}
}