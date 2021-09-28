module.exports = {
  inputs: {
    firstName:       { type: 'string', required: true },
    lastName:        { type: 'string', required: true },
    address:         { type: 'string', required: true },
    contact_number:  { type: 'string', required: true },

  },
  exits: {
    success: {
    }
  },
  fn: async function(inputs) {

    await User.updateOne({id: this.req.session.userId}).set({
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      address: inputs.address,
      contact_number: inputs.contact_number
    });

    this.req.addFlash('passChange','Your informations have been saved successfully!');

    return this.res.redirect('/');

  }
};
