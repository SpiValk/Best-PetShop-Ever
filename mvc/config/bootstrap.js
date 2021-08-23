/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */


module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  //   Set up fake development data (or if we already have some, avast)
  //     if (await Pet_Product.count() > 0) {
  //       return;
  //     }

  //    await Product.createEach([
  //      { name: 'dry food', description: 'Dry Food for Dogs', costPrice: '10', quantity: '1', product_category: 1, discount_id: 1 },
  //      { name: 'plastic bone', description: 'Chewing bone for Dogs and Cats', costPrice: '7', quantity: '1', product_category: 2, discount_id: 2 },
  //      // etc.
  //    ]);

  //     await Product_category.createEach([
  //       { name: 'Dry Foods', description: 'Dry foods'},
  //       { name: 'Chewing Toys', description: 'Chewing Toys'},
  //       // etc.
  //     ]);

//   await Discount.createEach([
//     { discountName: 'Summer Sales', description: 'Up to 40%', discountPercent: 40, active: 0},
//     { discountName: 'Winter Sales', description: 'Up to 30%', discountPercent: 30, active: 0},
//     // etc.
//   ]);
  // ```
};
