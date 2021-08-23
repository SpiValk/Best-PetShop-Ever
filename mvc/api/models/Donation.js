
module.exports = {
  tableName: 'donation',
  attributes :{
    user               : { model: 'user' },
    donation_recipient  : { model: 'donation_recipient' }
  }};
