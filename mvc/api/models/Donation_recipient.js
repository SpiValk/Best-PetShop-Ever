
module.exports = {
  tableName: 'donation_recipient',
  attributes: {
    name          : { type: 'string',  columnName: 'name',          required: true },
    description   : { type: 'string',  columnName: 'description',   required: true },
    phone_number  : { type: 'number',  columnName: 'phone_number',  required: true },
    email         : { type: 'string',  columnName: 'email',         required: true },

    donation_payment_id: {
      model:'donation_payment'
    },

    
    user_id: {
      collection: 'user',
      via:        'donation_recipient_id',
      through:    'donation',
    }
  }};
