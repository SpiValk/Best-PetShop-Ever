
module.exports = {
  tableName: 'donation',
  attributes :{
    user               : { model: 'user' },
    donation_recipent  : { model: 'donation_recipent' }
  }};
