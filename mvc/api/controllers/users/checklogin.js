// module.exports = {

//     inputs : {
//         username: { type: 'string'},
//         password: { type: 'string'},
//         email:    { type: 'string'}
//     },

//     exits: {
//         badCombo: {
//             description: `The provided email and password combination does not
//             match any user in the database.`,
//             responseType: 'unauthorized'
//         }},

    
  
// //     


// fn: async function({username, password}) {
        
//     let theUser = await User.findOne({username})
//     await sails.helpers.passwords.checkPassword(password, theUser.password).intercept('incorrect', 'badCombo')
//     if(theUser.isAdmin) {
//         console.log(this.req.session)
//         this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
//         this.req.session.username = username; // <----- This is the actual login!!!!! :0)
//         this.req.session.userId = theUser.id
//         this.req.session.isAdmin = true
       
//     }
//     if(!theUser.isAdmin) {
//         this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
//         this.req.session.username = username;
//         this.req.session.userId = theUser.id
//         this.req.session.isAdmin = false
//     }

//     this.res.redirect('/')    
// }
// }