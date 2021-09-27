module.exports = {
  exits: {
    success: {
      //   viewTemplatePath: 'pages/users/info'
    }
  },

  fn: async function() {
    let theUser = await User.findOne({id : this.req.session.userId});
    return this.res.view('pages/users/info', {theUser});
  }
};
