
module.exports = {
  tableName: 'donation',
  attributes :{
    user_id               : { model: 'user' },
    donation_recipient_id  : { model: 'donation_recipient' }
  }};
