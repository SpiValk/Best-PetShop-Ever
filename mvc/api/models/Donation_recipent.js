module.exports = {
    tableName: 'donation_recipent',
    attributes: {
        name          : { type: 'string',  columnName: 'name',          required: true },
        description   : { type: 'string',  columnName: 'description',   required: true },
        phone_number  : { type: 'number',  columnName: 'phone_number',  required: true },
        email         : { type: 'string',  columnName: 'email',         required: true },
    
        donation_payment: {
            model:'donation_payment'
        },

            user: {
                collection: 'user',
                via:        'donation_recipent',
                through:    'donation',
            }
          }}