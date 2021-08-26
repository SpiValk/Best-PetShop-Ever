/* eslint-disable camelcase */
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
  if (await Pet_product.count() > 0) {
    return;
  }

  await Customer.createEach([
    { firstName: 'super', lastName: 'admin', address: 'In da house', contact_number: '1313', user_id: 1},
    { firstName: 'John', lastName: 'Doe', address: 'elpinikis 8, patisia', contact_number: '1212', user_id: 2},
  ]);

  await User.createEach([
    {username:'admin', password: 'admin', email: 'admin@admin.com', isAdmin: 1, customer_id: 1},
    {username:'john', password: 'doe', email: 'john@doe.com', isAdmin: 0, customer_id: 2, payment_id: 1} //only one payment per user???
  ]);

  await Payment.createEach([
    {payment_type: 'Visa', user_id: 2},
    {payment_type: 'Cash', user_id: 2},
  ]);


  await Discount.createEach([
    { discountName: 'Summer Sales', description: 'Up to 40%', discountPercent: 40, active: 0},
    { discountName: 'Winter Sales', description: 'Up to 30%', discountPercent: 30, active: 0},
    // etc.
  ]);

  await Vendor.createEach([
    {companyName: 'Bon Appetit', contactPerson: 'Maria 5Isa', companyEmail: 'maria5i@bonappetit.com', companyWebSite: 'https://www.bonappetitpetfood.com/', companyPhone:'+3115553123' },
    {companyName: 'Natura Wild', contactPerson: 'George Bezos', companyEmail: 'Gbezos@nwild.com', companyWebSite: 'https://www.natura-wild.com/en/homepage/', companyPhone:'+3115553567' },
    {companyName: 'Natyka', contactPerson: 'orestis chang', companyEmail: 'karate@natyka.com', companyWebSite: 'https://www.natyka.com/en/homepage/#intro', companyPhone:'+3131453567' },
    {companyName: 'Ancol', contactPerson: 'John Bush', companyEmail: 'jbush@natyka.com', companyWebSite: 'https://www.ancol.co.uk/', companyPhone:'01922402428' },
    {companyName: 'Record'},
    {companyName: 'So Phresh'},

  ]);

  await Pets.createEach([
    {name: 'dog', description:'dog...'},
    {name: 'cat', description:'cat...'},
    {name: 'fish', description:'fish...'},
    {name: 'bird', description:'bird...'},
    {name: 'small animals', description:'little animals'}
  ]);

  await Product_category.createEach([
    {
      category_name: 'dog foods',
      description: 'dry food, dog cans, dog-treats & chews',
      pets_id: 1
    },
    {
      category_name: 'dog grooming',
      description: 'diapers,  flea and wormers, dog shampoo, ' +
                    'brushes & combs, scissors & clippers, perfumes & fragrances',
      pets_id: 1
    },
    {
      category_name: 'dog accessories',
      description: 'toys, clothes, poop bags, collars, bowls & feeding, leads, harness, ' +
                    'muzles, transport boxes, beds, houses',
      pets_id: 1
    },
    {
      category_name: 'dog vetinary products',
      description: 'antiparasitics, antibiotics, wound care, ',
      pets_id: 1
    },
  ]);

  await Product_subcategory.createEach([
    {subcategory: 'dry food'},
    {subcategory: 'dog cans'},
    {subcategory: 'dog treats chews'},
    {subcategory: 'dog diapers'},
    {subcategory: 'dog flea and wormers'},
    {subcategory: 'dog shampoo'},
    {subcategory: 'dog brushes and combs'},
    {subcategory: 'dog scissors and clippers'},
    {subcategory: 'perfumes and frangrances'},
  ]);


  await Pet_product.createEach([
    {
      name: 'Bon Appetit Adult Dog Chicken & Rice Dry Food: hypoallergenic, gluten-free',
      description: 'A Bon Appetit dog food that is hypoallergenic and gluten-free suitable for all stages of life. 68% chicken, 32% Fruit and Vegetables and 0% gluten',
      quantity: 1,
      vendor_price: 8,
      image_name: 'Bon-Appetit-adult-chicken-rice-dog-food-premium-gluten-free-hypoallergenic.png',
      status: 1,
      vendor_id: 1,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1
    },
    {
      name: 'Bon Appetit Adult Dog Lamb & Salmon & Rice Dry Food: hypoallergenic, gluten-free',
      description: 'A premium Bon Appetit dog food that is hypoallergenic and gluten free suitable for all stages of life. 62% lamb and salmon, 38% fruit and vegetables and 0% gluten. ',
      quantity: 1,
      vendor_price: 10,
      image_name: 'Bon-Appetit-premium-gluten-free-hypoallergenic-dog-food-adult-lamb-salmon-rice.png',
      status: 1,
      vendor_id: 1,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1
    },
    {
      name: 'Bon Appetit Adult Dog Maxi Chicken & Rice Dry Food: hypoallergenic, gluten-free',
      description: 'A hypoallergenic, gluten free premium dog food is ideal for adult dogs of large breeds for all stages of life. 60% chicken, 40% fruit and vegetables, 0% gluten.',
      quantity: 1,
      vendor_price: 25,
      image_name: 'Bon-appetit-dog-food-gluten-free-adult-maxi-chicken-rice-hypoallergenic.png',
      status: 1,
      vendor_id: 1,
      product_category_id: 1,
      subcategory_id: 1,
      pet_id: 1
    },
    {
      name: 'Grain Free Dog Food Natura Wild: Ontario Wildland Adult Dry Food',
      description: 'Complete grain-free dog food for adult dogs: Recipe with lamb & French pork. 35% fresh meat + 40% dehydrated meat + 25% fruits and vegetables',
      quantity: 1,
      vendor_price: 6,
      image_name: 'ontario-wildland-12kg.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1
    },
    {
      name: 'Grain Free Puppy Food: Natura Wild Little Creek',
      description: 'Complete grain-free food for puppies from 1- 18 months: Recipe with salmon, tuna and turkey. 40 % fresh meat + 42 % dehydrated meat & fat + 18 % fruits and vegetables',
      quantity: 1,
      vendor_price: 6,
      image_name: 'Natura-Wolf-Little-Creek-Grain-Free-Dog-Puppy-Food-12kg.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Grain-Free Dry Dog Food Natura Wild North Country: poultry, duck & turkey',
      description: 'Complete grain free food for dogs that tend to be overweight, sterilised dogs, adult dogs (of large breeds): Recipe with poultry, duck & turkey. 40% fresh meat + 40 % dehydrated meat + 20 % fruits and vegetables',
      quantity: 1,
      vendor_price: 25,
      image_name: 'Natura-wild-north-country-grain-free-dog-food.jpeg',
      status: 1,
      vendor_id: 2,
      product_category_id: 1,
      subcategory_id: 2,
      pet_id: 1

    },
    {
      name: 'Natyka Gourmet Gluten Free Puppy Food',
      description: 'This gluten free puppy food is a complete semi-moist poultry food for puppies. It\'s a delicious composition based on poultry, dried potatoes, rice, salmon oil and a range of high quality ingredients.',
      quantity: 1,
      vendor_price: 25,
      image_name: 'Natyka_Gourmet_gluten_free_puppy_dry_food_9kg.jpeg',
      status: 1,
      vendor_id: 3,
      product_category_id: 1,
      subcategory_id: 3,
      pet_id: 1

    },
    {
      name: 'Natyka Gourmet Adult Gluten Free Dog Food',
      description: 'This gluten free dog food is suitable for all dog breeds. It is very specific due to the semi-moist consistency that will promote a good metabolism. Due to its gluten-free composition, allergies and food intolerance risks are clearly reduced.',
      quantity: 1,
      vendor_price: 25,
      image_name: 'Natyka-Gourmet-Adult-Real-Poultry-Complete-Dog-Dry-Food.jpeg',
      status: 1,
      vendor_id: 3,
      product_category_id: 1,
      subcategory_id: 3,
      pet_id: 1

    },
    {
      name: 'Natyka Gourmet Adult Real Lamb & Salmon Dog Food',
      description: 'This gluten free lamb and salmon semi-moist recipe is suitable for all adult and senior dogs, but also because its semi-wet consistency makes it a favoured food for dogs with digestive or dental problems.',
      quantity: 1,
      vendor_price: 18,
      image_name: 'Natyka-gourmet-lamb-salmon-adult-dog-dry-food-02.jpeg',
      status: 1,
      vendor_id: 3,
      product_category_id: 1,
      subcategory_id: 3,
      pet_id: 1
    },
    {
      name: 'Ancol Ergo Wood Handle Soft Bristle Dog Brush',
      description: 'Removes dead hair and promotes glossy coat. It comes with a wood handle for comfort',
      quantity: 1,
      vendor_price: 2,
      image_name: 'Ancol-dog-brush-soft.jpeg',
      status: 1,
      vendor_id: 5,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Record Pet Hair Remover Brush Set',
      description: 'The Record Pet Hair Remover Brush is reusable, double-sided and can be used on sofas, car seats, clothes, pet beds, but also on the pet directly, as it does not leave glue residue or dangerous chemical materials.',
      quantity: 1,
      vendor_price: 5,
      image_name: 'RECORD-Brush-Hair-Remover-5540.jpeg',
      status: 1,
      vendor_id: 5,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Record Self Cleaning Slicker Brush',
      description: 'A tool specially made for the daily grooming of long-haired cats and dogs. After having combed your pet you’ll need to push the button on the back of the brush and the plastic board will easily expel the combed hair.',
      quantity: 1,
      vendor_price: 5,
      image_name: 'Record-self-cleaning-slicker-brush.jpeg',
      status: 1,
      vendor_id: 5,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'So Phresh Washable Diaper for Dogs, X-Small',
      description: 'Washable Diaper for Dogs, X-Small',
      quantity: 1,
      vendor_price: 5,
      image_name: 'so-phresh-washable-dog-diaper-Xs.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'Drontal Tasty Bone Wormer Tablets',
      description: 'Drontal Tasty Bone worming tablets work fast to kill every type of intestinal worm commonly found in UK dogs, giving you peace of mind that you are helping keep internal parasites away from your pet and family. ',
      quantity: 1,
      vendor_price: 5,
      image_name: 'Drontal-Tasty-Bone-Worming-Tablets-for-Dogs-1-Tablet_1.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
  ]);
  // ```
};
