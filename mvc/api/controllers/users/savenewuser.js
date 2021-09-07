module.exports = {
    inputs: {
        username: {type: 'string', requires: true},
        password: {type: 'string', requires: true},
        // email
    },

    exits: {
        success: {
            vieTemplatePath: 'pages/users/successfullregistration'
        }
    },

    fn: async function(inputs) {
        await User.create({username: inputs.username, password: inputs.password, isAdmin: false})
        return {}
    }
}