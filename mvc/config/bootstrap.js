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

  //------------ CREATE CUSTOMERS ---------------//
  await Customer.createEach([
    { firstName: 'super', lastName: 'admin', address: 'In da house', contact_number: '1313', user_id: 1},
    { firstName: 'John', lastName: 'Doe', address: 'elpinikis 8, patisia', contact_number: '1212', user_id: 2},
  ]);

  //-------------- CREATE USERS ---------------//
  await User.createEach([
    {username:'admin', password: 'admin', email: 'admin@admin.com', isAdmin: 1, customer_id: 1},
    {username:'john', password: 'doe', email: 'john@doe.com', isAdmin: 0, customer_id: 2, payment_id: 1} //only one payment per user???
  ]);


  //-------------- CREATE PAYMENT METHODS ---------------///
  await Payment.createEach([
    {payment_type: 'Visa', user_id: 2},
    {payment_type: 'Cash', user_id: 2},
  ]);

  //------------- CREATE DISCOUNTS ------------------------//
  await Discount.createEach([
    { discountName: 'Summer Sales', description: 'Up to 40%', discountPercent: 40, active: 0},
    { discountName: 'Winter Sales', description: 'Up to 30%', discountPercent: 30, active: 0},
    // etc.
  ]);

  //-------------------- CREATE VENDORS ----------------//
  await Vendor.createEach([
    {companyName: 'Bon Appetit', contactPerson: 'Maria 5Isa', companyEmail: 'maria5i@bonappetit.com', companyWebSite: 'https://www.bonappetitpetfood.com/', companyPhone:'+3115553123' },
    {companyName: 'Natura Wild', contactPerson: 'George Bezos', companyEmail: 'Gbezos@nwild.com', companyWebSite: 'https://www.natura-wild.com/en/homepage/', companyPhone:'+3115553567' },
    {companyName: 'Natyka', contactPerson: 'orestis chang', companyEmail: 'karate@natyka.com', companyWebSite: 'https://www.natyka.com/en/homepage/#intro', companyPhone:'+3131453567' },
    {companyName: 'Ancol', contactPerson: 'John Bush', companyEmail: 'jbush@natyka.com', companyWebSite: 'https://www.ancol.co.uk/', companyPhone:'01922402428' },
    {companyName: 'Record'},
    {companyName: 'So Phresh'},

  ]);


  //---------------------CREATE PETS ------------------//
  await Pets.createEach([
    {name: 'dog', description:'dog...'},
    {name: 'cat', description:'cat...'},
    {name: 'fish', description:'fish...'},
    {name: 'bird', description:'bird...'},
    {name: 'small animals', description:'little animals'}
  ]);

  //------------------ CREATE PRODUCT CATEGORIES --------------//
  //---Dog--//
  await Product_category.createEach([
    {
      category_name: 'dog-foods',
      description: 'dry food, dog cans, dog-treats & chews',
      pets_id: 1
    },
    {
      category_name: 'dog-grooming',
      description: 'diapers,  flea and wormers, dog shampoo, ' +
                    'brushes & combs, scissors & clippers, perfumes & fragrances',
      pets_id: 1
    },
    {
      category_name: 'dog-accessories',
      description: 'toys, clothes, poop bags, collars, bowls & feeding, leads, harness, ' +
                    'muzles, transport boxes, beds, houses',
      pets_id: 1
    },
    {
      category_name: 'dog-veterinary-products',
      description: 'antiparasitics, antibiotics, wound care, ',
      pets_id: 1
    },

    //---Cat--//
    {
      category_name: 'cat-foods',
      description: 'dry food, cat cans, cat-treats & chews',
      pets_id: 2
    },
    {
      category_name: 'cat-grooming',
      description: 'diapers,  flea and wormers, cat shampoo, ' +
                    'brushes & combs, scissors & clippers, perfumes & fragrances',
      pets_id: 2
    },
    {
      category_name: 'cat-accessories',
      description: 'toys, clothes, poop bags, collars, bowls & feeding, leads, harness, ' +
                    'muzles, transport boxes, beds, houses',
      pets_id: 2
    },
    {
      category_name: 'cat-veterinary-products',
      description: 'antiparasitics, antibiotics, wound care, ',
      pets_id: 2
    },
  ]);

  //------------------ CREATE SUBCATEGORIES -------------------//
  await Product_subcategory.createEach([
    //--------------------- DOG ------------------------------//
    //------ FOODS -------//
    {subcategory: 'dog-dry-food', category_id: 1},
    {subcategory: 'dog-cans', category_id: 1},
    {subcategory: 'dog-treats-and-chews', category_id: 1},
    //------ GROOMING -------//
    {subcategory: 'dog-diapers', category_id: 2},
    {subcategory: 'dog-shampoo', category_id: 2},
    {subcategory: 'dog-brushes-and-combs', category_id: 2},
    {subcategory: 'dog-scissors-and-clippers', category_id: 2},
    {subcategory: 'dog-perfumes-and-fragrances', category_id: 2},
    //------ ACCESSORIES -------//
    {subcategory: 'dog-toys', category_id: 3},
    {subcategory: 'dog-clothes', category_id: 3},
    {subcategory: 'dog-collars', category_id: 3},
    {subcategory: 'dog-bowls-and-feeding', category_id: 3},
    {subcategory: 'dog-leads', category_id: 3},
    {subcategory: 'dog-harness', category_id: 3},
    {subcategory: 'dog-poop-bags', category_id: 3},
    {subcategory: 'dog-muzzle', category_id: 3},
    {subcategory: 'dog-transport-boxes', category_id: 3},
    {subcategory: 'dog-beds', category_id: 3},
    {subcategory: 'dog-houses', category_id: 3},
    //------ VETERINARY -------//
    {subcategory: 'dog-prescription-only-medicines', category_id: 4},
    {subcategory: 'dog-antibiotics', category_id: 4},
    {subcategory: 'dpg-wound-care', category_id: 4},
    {subcategory: 'dog-fleas-and-wormers', category_id: 4},
    {subcategory: 'dog-vitamins-minerals-electrolytes', category_id: 4},
    {subcategory: 'barf', category_id: 1}, //------- FOODS ------//

    //--------------------- CAT ------------------------------//
    //------ FOODS -------//
    {subcategory: 'cat-dry-food', category_id: 5},
    {subcategory: 'cat-cans', category_id: 5},
    {subcategory: 'cat-treats-and-chews', category_id: 5},
    //------ GROOMING -------//
    {subcategory: 'cat-diapers', category_id: 6},
    {subcategory: 'cat-shampoo', category_id: 6},
    {subcategory: 'cat-brushes-and-combs', category_id: 6},
    {subcategory: 'cat-scissors-and-clippers', category_id: 6},
    {subcategory: 'cat-perfumes-and-fragrances', category_id: 6},
    //------ ACCESSORIES -------//
    {subcategory: 'cat-toys', category_id: 7},
    {subcategory: 'cat-clothes', category_id: 7},
    {subcategory: 'cat-collars', category_id: 7},
    {subcategory: 'cat-bowls-and-feeding', category_id: 7},
    {subcategory: 'cat-leads', category_id: 7},
    {subcategory: 'cat-harness', category_id: 7},
    {subcategory: 'cat-poop-bags', category_id: 7},
    {subcategory: 'cat-muzzle', category_id: 7},
    {subcategory: 'cat-transport-boxes', category_id: 7},
    {subcategory: 'cat-beds', category_id: 7},
    {subcategory: 'cat-houses', category_id: 7},
    //------ VETERINARY -------//
    {subcategory: 'cat-antiparasitics', category_id: 8},
    {subcategory: 'cat-antibiotics', category_id: 8},
    {subcategory: 'cat-wound-care', category_id: 8},
    {subcategory: 'cat-fleas-and-wormers', category_id: 8},
    {subcategory: 'cat-vitamins-minerals-electrolytes', category_id: 8},

  ]);


  //-------------------------- CREATE PRODUCTS --------------------//

  await Pet_product.createEach([


    //--------------------- Dog ------------------------------//

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
      subcategory_id: 1,
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
      subcategory_id: 1,
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
      subcategory_id: 1,
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
      subcategory_id: 25,
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
      subcategory_id: 25,
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
      subcategory_id: 25,
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

    //**** DOG GROOMING ******//
    //---Dog diapers---//
    {
      name: 'Top Paw® Disposable Dog Diapers - 30 Pack',
      description: 'Top Paw Disposable Diapers are the perfect choice for dogs and pet parents dealing with incontinence, females in heat, excitable urination, and travel.' ,
      quantity: 1,
      vendor_price: 6,
      image_name: 'top-paw-disposable-dog-diapers-30-pack',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'Top Paw® Disposable Dog Diapers - 12 Pack',
      description: 'Top Paw Disposable Diapers are the perfect choice for dogs and pet parents dealing with incontinence, females in heat, excitable urination, and travel.' ,
      quantity: 2,
      vendor_price: 3,
      image_name: 'top-paw-disposable-dog-diapers-12pack.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'PoochPad Washable Diapers',
      description: 'The PoochPants Washable Diaper is a reusable diaper for dogs that is washable, leakproof, with no inserts needed.' ,
      quantity: 2,
      vendor_price: 3,
      image_name: 'pooch-pad-washable-diapers.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'Simple Solution® Disposable Dog Diapers - 12 Pack',
      description: 'With tabs underneath and padding facing in, slip the hole of the diaper over your dogs tail. Position the diaper between the back legs and snug against your dogs underbelly' ,
      quantity: 2,
      vendor_price: 3,
      image_name: 'simple-solution-disposable-dog-diapers-12-pack.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    {
      name: 'Simple Solution® All Day Dog Pads',
      description: 'Neutralize accidents and unpleasant odors as you training your large dog with Simple Solutions All Day Premium Dog Pads.' ,
      quantity: 2,
      vendor_price: 4,
      image_name: 'simple-solution-all-day-dog-pads.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 4,
      pet_id: 1
    },
    //---Dog shampoo---//
    {
      name: 'Advance Atopic Care Shampoo',
      description: 'A special dog shampoo with triple effect, thanks to a combination of aloe vera, collagen and olive leaf extract.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'advance-atopic-care-shampoo.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'beaphar Puppy Shampoo Glossy Coat',
      description: 'beaphar Puppy Shampoo Glossy Coat is a shampoo with valuable macadamia nut oil, especially developed for the sensitive skin of puppies.' ,
      quantity: 2,
      vendor_price: 6,
      image_name: 'beaphar-puppy-shampoo-glossy-coat.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'Trixie Aloe Vera Dog Shampoo',
      description: 'beaphar Puppy Shampoo Glossy Coat is a shampoo with valuable macadamia nut oil, especially developed for the sensitive skin of puppies.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'trixie-aloe-vera-dog-shampoo.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'beaphar Dog Shampoo for White Coats',
      description: 'beaphar Shampoo with Aloe Vera is a newly developed shampoo for the gentle cleansing of dogs of all breeds with white fur.' ,
      quantity: 2,
      vendor_price: 5,
      image_name: 'beaphar-dog-shampoo-for-white-coats.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    {
      name: 'Frontline Pet Care Sensitive Skin Shampoo',
      description: 'Frontline Pet Care Sensitive Skin Shampoo has been specifically developed for cat and dogs who suffer from irritable skin.' ,
      quantity: 2,
      vendor_price: 5,
      image_name: 'frontline-pet-care-sensitive-skin-shampoo',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 5,
      pet_id: 1
    },
    //---Dog brushes & combs---//
    {
      name: 'Moser Dematter',
      description: 'Effective dematting grooming tool for removing knotted and matted fur in your dog’s undercoat.' ,
      quantity: 1,
      vendor_price: 3,
      image_name: 'moser_dematter.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: '8in1 Perfect Coat DeShedder for Dogs',
      description: 'A grooming brush for dogs that effectively removes loose hair and undercoat without damaging the top coat.' ,
      quantity: 2,
      vendor_price: 5,
      image_name: '8in1-perfect-coat-deshedder-for-dogs.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Trixie Universal Curry Combs',
      description: 'A high-quality wire brush for cats and dogs of all fur types, helping to remove loose hairs, dirt and matting.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'trixie-universal-curry-combs.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Trixie Double-Sided Oval Pet Brush',
      description: 'The double-sided pet brush from Trixie is suitable for cats and dogs.' ,
      quantity: 2,
      vendor_price: 4,
      image_name: 'trixie-double-sided-oval-pet-brush.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    {
      name: 'Grooming Glove',
      description: 'Glove for grooming dogs and cats, double-sided use, one bobbly side and one velour side, pleasant massaging effect.' ,
      quantity: 4,
      vendor_price: 3,
      image_name: 'grooming-glove.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 6,
      pet_id: 1
    },
    //---Dog scissors & clippers---//
    {
      name: 'Trixie Easy Claw Pet Clippers',
      description: 'The claw scissors from Trixie are the easy way to trim your pets claws safely.' ,
      quantity: 2,
      vendor_price: 3,
      image_name: 'trixie-easy-claw-pet-clippers.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Trixie Household Claw Clippers',
      description: 'These handy Trixie clippers can be used to trim the claws of any household pet.' ,
      quantity: 2,
      vendor_price: 4,
      image_name: 'trixie-household-claw-clippers.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Oster Cordless Claw Trimmer',
      description: 'Battery powered file for stress-free claw trimming, with two speed settings for quick and easy pet manicures.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'oster-cordless-claw-trimmer.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Wahl Pet U-Clip Dog Clipper Kit',
      description: 'Mains operated dog clipper with coloured combs for easy selection of cutting lengths and adjustable taper lever for wide variation of cutting lengths.' ,
      quantity: 1,
      vendor_price: 6,
      image_name: 'wahl-pet-u-clip-dog-clipper-kit.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    {
      name: 'Wahl Pet KMSS Dog Clipper Kit',
      description: 'The Wahl KM SS mains powered, high performance single speed animal clipper has a high torque rotary motor which is both durable and powerful.' ,
      quantity: 2,
      vendor_price: 6,
      image_name: 'wahl-pet-kmss-dog-clipper.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 7,
      pet_id: 1
    },
    //---Dog perfumes & fragrances---//
    {
      name: 'Earthbath Hypo-Allergenic Fragrance',
      description: 'earthbath Hypo-Allergenic Grooming Wipes safely and easily wipe away dirt & odor between baths.' ,
      quantity: 3,
      vendor_price: 3,
      image_name: 'earthbath-hypo-allergenic-fragrance.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },
    {
      name: 'Lavender & Chamomile Aromatherapy',
      description: 'Freshening & Shining Spray for Pets, Dog Grooming Spray & Pet Odor Eliminator' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'lavender-chamomile-aromatherapy.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },
    {
      name: 'Natural Pet Cologne',
      description: 'Deodorant and Scented Perfume Body Spray' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'natural-pet-cologne.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },
    {
      name: 'Lambert Kay Fresh N Clean Cologne Finishing Spray',
      description: 'Fresh N Clean Cologne Finishing Spray - Baby Powder Scent' ,
      quantity: 2,
      vendor_price: 4,
      image_name: 'lambert-kay-fresh-n-clean-cologne-finishing-spray.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 2,
      subcategory_id: 8,
      pet_id: 1
    },


    //**** DOG ACCESORIES ******//

    //---DOG TOYS---//
    {
      name: 'KONG® Classic Dog Toy-Treat Dispensing',
      description: 'The KONG Classic is the gold standard of dog toys, and has become the staple for dogs around the world for over forty years. Offering enrichment by helping satisfy a dogs instinctual needs' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'kong-toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'KONG® Cozie Spunky Monkey Dog Toy',
      description: 'Your dog loves to cuddle and he also loves to play, so grab a toy that he can do both with. Kong\'s Cozie Spunky Monkey is cute, cuddly and durable. Your dog will enjoy the versatility this toy offers.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'kong-monkey-toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'KONG® AirDog® Tennis Ball Set Squeaker Dog Toy',
      description: 'The KONG SqueakAir Tennis Ball Dog Toy combines two classic dog toys -the tennis ball and the squeaker toy-to create the perfect fetch toy. This durable, high-quality Squeakair tennis ball will not wear down your dog\'s teeth' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'kong-tennis-ball.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Thrills & Chills™ Halloween GET SPOOKY! Purple Bone Dog Toy - Plush, Squeaker',
      description: 'Your dog will have a spook-tacular time playing with this Thrills & Chills Plush Spooky Bone Dog Toy' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Thrills&Chills-Purple-Bone-Dog.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Top Paw® "I Love PetSmart" Flyer Dog Toy',
      description: 'Engage in fun, interactive play with your dog with this Top Paw Plastic Flyer. This fun flyer is the perfect vehicle by which to keep your dog active and engaged' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw-Flyer-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Nylabone® Puppy Ring Chew Dog Toy',
      description: 'The Puppy Ring Bone is specifically designed for teething puppies to encourage the development of non-destructive chewing habits. Not recommended for dogs with any adult teeth.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Nylabone-Puppy-Ring-Chew.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Nylabone® Puppy Teething Keys Chew Dog Toy',
      description: 'This Nylabone Just for Puppies Teething Chew Keys Toy is made from inert soft thermoplastic polymer to satisfy the chewing instinct of teething puppies, and encourages non-destructive chewing' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Nylabone-Chew-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'KONG® Teddy Bear Dog Toy - Plush, Squeaker',
      description: ' A plush toy that lasts! KONG\'s Plush Teddy Bear Dog Toy is the perfect toy for your pooch who loves stuffed toys - minus the mess! This plush toy comes with a pre-loaded removable internal squeaker that all dogs love.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Kong-Teddy-Bear-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Multipet® Lamb Chop Dog Toy - Squeaker, Plush',
      description: ' The Multipet Lamb Chop Mini Dog Toy is the officially licensed Lamb Chop Dog Toy from the popular Shari Lewis children\'s program.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Kong-Teddy-Bear-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Top Paw® Spiky Football Dog Toy - Squeaker',
      description: 'Keep your dog active and entertained with this Top Paw Spiky TPR Football Dog Toy' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw-Spiky-Football-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },
    {
      name: 'Thrills & Chills™ Halloween Spider Dog Toy - Plush, Squeaker',
      description: 'Your dog will have a spook-tacular time playing with this Thrills & Chills Plush Spider Dog Toy.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Thrills-Chills-Halloween-Spider-Dog-Toy.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 9,
      pet_id: 1
    },

    //DOG ACCESSORIES/DOG LEADS
    {
      name: 'KONG® Comfort Dog Leash',
      description: 'The KONG Padded Hands-Free Leash offers you more freedom while still being in control on walks with your furry friend' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'KONG-Comfort-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Top Paw® Nylon Dog Leash: 6-ft long',
      description: 'This Top Paw Standard Navy Nylon Dog Leash makes walks safer and more enjoyable for you and your dog' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw-Nylon-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:13,
      pet_id: 1
    },
    {
      name: 'flexi® New Classic Retractable Cord Dog Leash',
      description: 'Keep your dog safe on walks while giving him a bit of room to roam with the Flexi New Classic Retractable Cord Dog Leash.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'flexi-New-Retractable-Cord-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'KONG® Rope Dog Leash',
      description: 'The KONG Red Rope Leash offers pet parents more comfort and control on walks' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'KONG-Rope-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Arcadia Trail™ Reflective Rope Dog Leash: 4-ft long',
      description: 'This Arcadia Trail Berry Reflective Rope Dog Leash is the perfect choice for doggie/pet parent duos that love enjoying the outdoors together' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Arcadia-Trail-Reflective-Rope-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:13,
      pet_id: 1
    },
    {
      name: 'Top Paw® Rope Dog Leash',
      description: 'Make walks with your pup safer and more enjoyable with the Top Paw Rope Leash.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw-Rope-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Thrills & Chills™ Halloween Orange & Black Waste Bag Dispenser Leash Set: 4-ft long',
      description: 'Walking your dog, and cleaning up after him in convenient fashion, is a breeze with this Thrills & Chills Waste Bag Dispenser Leash Set.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Thrills-&-Chills-Halloween-Waste-Bag-Dispenser-Leash-Set.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Lucy & Co. Dilly Lily Dog Leash',
      description: 'Make walks safer and more enjoyable for you and your pup with this Lucy & Co. Teal Floral Dog Leash' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Lucy-&-Co-Dilly-Lily-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:13,
      pet_id: 1
    },
    {
      name: 'Top Paw® Blue Multi-Bone Dog Leash: 6-ft long, 5/8-in wide',
      description: 'This colorful leash is strong and sturdy, and offers you more control while the two of you enjoy walks together' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw-Blue-Multi-Bone-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'Lucy & Co. Posy Pink Dog Leash',
      description: 'This great-looking leash comes in vibrant pink, and offers you optimal control as well as a padded handle for maximum comfort while the two of you enjoy walks together' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Lucy-&-Co-Posy-Pink-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },
    {
      name: 'KONG® Reflective Padded Hands-Free Dog Leash',
      description: 'The KONG Reflective Padded Hands-Free Leash offers you more freedom while still being in control on walks with your furry friend' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'KONG-Reflective-Padded-Hands-Free-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 13,
      pet_id: 1
    },


    //DOG ACCESSORIES/DOG HARNESS
    {
      name: 'KONG® Reflective Pocket Dog Harness',
      description: 'Keep your dog safer and more comfortable on walks with this stylish KONG Reflective Pocket Dog Harness.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'KONG-Reflective-Pocket-Dog-Harness.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id:14,
      pet_id: 1
    },
    {
      name: 'Top Paw® Gunmetal Core Adjustable Dog Harness',
      description: 'The Top Paw Gunmetal Core Adjustable Harness is colorful and stylish, and provides you and your dog with the vehicle to make walks and other outdoor excursions safer and more enjoyable.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw-Gunmetal-Core-Adjustable-Dog-Harness.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 14,
      pet_id: 1
    },
    {
      name: 'Arcadia Trail™ Neoprene Sport Dog Harness',
      description: 'Dogs and their humans that are serious about their tandem outdoor excursions will love this Arcadia Trail Yellow Neoprene Sport Harness' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Arcadia-Trail-Neoprene-Sport-Dog-Harness.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 14,
      pet_id: 1
    },








    //**** DOG ACCESORIES/DOG BEDS ******//
    {
      name: 'Top Paw® Grey Hearts Classic Pillow Dog Bed',
      description: 'This Top Paw Grey Hearts Core Classic Pillow Dog Bed is lightweight enough for your dog to sleep anywhere. It features a field of colorful hearts at the heart of its design, and features soft polyfill for optimal comfort.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw®-Grey-Hearts-Classic-Pillow-Dog-Bed_files.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Lounger Dog Bed',
      description: 'This Top Paw Orthopedic Lounger Bed is overstuffed for a dreamy blend of support your dog will love.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw®-Orthopedic-Lounger-Dog Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Memory Foam Quilt Mattress Dog Bed',
      description: 'The KONG SqueakAir Tennis Ball Dog Toy combines two classic dog toys -the tennis ball and the squeaker toy-to create the perfect fetch toy. This durable, high-quality Squeakair tennis ball will not wear down your dog\'s teeth' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw®-Orthopedic-Memory-Foam-Quilt-Mattress-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Cuddler Dog Bed',
      description: 'This Top Paw Grey Heather Orthopedic Cuddler Bed features dual layers the delicately balance softness and support.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw®-Orthopedic-Cuddler-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Top Paw® Orthopedic Super Support Cuddler Dog Bed',
      description: 'Your pet will experience ultimate relaxation when cradled against the cushioned walls of the new and improved Top Paw Orthopedic Cuddler Bed.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Top-Paw®-Orthopedic-Super-Support-Cuddler-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'PAIKKA Recovery Burrow Pet Bed',
      description: 'The PAIKKA Recovery Burrow Bed supports restful sleep and offers a warm hiding place for your dog. ' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'PAIKKA-Recovery-Burrow-Pet-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },

    {
      name: 'Armarkat Soothing Blue Memory Foam Mattress Dog Bed',
      description: 'The Armarkat Model D08B medium bolstered pet bed is made with durable upholstery and a 7-inch thick memory foam mattress for maximum comfort.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Armarkat-Soothing-Blue-Memory-Foam-Mattress-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },
    {
      name: 'Carolina Pet Orthopedic Comfort Couch Personalized Dog Bed',
      description: 'You can personalize this product with one line of personalization and up to 10 characters including spaces.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'Carolina-Pet-Orthopedic-Comfort-Couch-Personalized-Dog-Bed.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 18,
      pet_id: 1
    },

    //-------- Dog Clothes --------//
    {
      name: 'Hopping Bunny Flannel Dog Pajamas',
      description: 'XS dog Pajamas' ,
      quantity: 1,
      vendor_price: 30,
      image_name: 'Hopping-Bunny-Flannel-Dog-Pajamas.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Sparkling Bow Ruffle Layered Dog Dress',
      description: 'Adorable dog dress with a striped top and polka dots ruffle layered skirt. Made with soft knit cotton fabric, accented with an attached sparkling belt and sparkling bow.' ,
      quantity: 1,
      vendor_price: 30,
      image_name: 'Sparkling-Bow-Ruffle-Layered-Dog-Dress.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Juicy Watermelon Dog Sundress',
      description: 'Adorable and juicy watermelon dog sundress, with attached large D-ring for easy leash attachment. ' ,
      quantity: 1,
      vendor_price: 30,
      image_name: 'Juicy-Watermelon-Dog-Sundress.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Juicy Watermelon Dog Sundress',
      description: 'Adorable hand knitted (bobble stitch) turtleneck dog sweater, accented with a flower on the side. Made with soft acrylic yarn.' ,
      quantity: 1,
      vendor_price: 30,
      image_name: 'Bobble-Stitch-Turtleneck-Dog-Sweater-Pink.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Sun Shield Dog Tee Pebble',
      description: 'The Sun Shield Dog Tee is a silky soft, lightweight stretch jersey with a UPF-50 rating that blocks 98% of the sun\'s harmful UV rays.' ,
      quantity: 1,
      vendor_price: 30,
      image_name: 'Sun-Shield-Dog-Tee-Pebble.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    {
      name: 'Stretch Fleece Onesie Dog Pajamas Navy/Winter Mod',
      description: 'These are unbeatable dog pajamas but aren\'t they also perfect for the next polar vortex on their own or under a waterproof coat?' ,
      quantity: 1,
      vendor_price: 30,
      image_name: 'Stretch-Fleece-Onesie-Dog-Pajamas-NavyWinter-Mod.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 10,
      pet_id: 1
    },
    //---------------- Dog Collars --------------//
    {
      name: 'Buttercup Plaid Flannel Dog Collar',
      description: 'A mellow yellow plaid in soft, thick flannel.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'buttercup-plaid-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Harbor Plaid Flannel Dog Collar',
      description: 'A timeless plaid in a calming cornflower blue made from soft flannel.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'harbor-plaid-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Harvest Plaid Flannel Dog Collar',
      description: 'A beautiful autumn collar made from soft flannel in shades of yellow, gray, orange and cream.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'harvest-plaid-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'OurPets Comfort Elevated Dog Bowl, Black 8 Inches',
      description: 'This flannel collar features an all-American plaid in shades of red, white and blue.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'OurPets-Comfort-Elevated-Dog-Bowl-Black-8-Inches.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Pink Herringbone Flannel Dog Collar',
      description: 'A gentle pink collar with a subtle herringbone pattern made from luxuriously thick flannel.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'pink-herringbone-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Sunset Flannel Dog Collar',
      description: 'This flannel collar features warm jewel tones in purple, pink, and orange.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'sunset-flannel-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Red and Black Buffalo Check Dog Collar',
      description: 'A classic red and black buffalo plaid pattern is perfect during the winter and year-round.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'red-and-black-buffalo-check-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },
    {
      name: 'Upcycled Denim Dog Collar',
      description: 'Part of our Upcycled Denim capsule, a collection that is as beautiful as it is sustainable. Made in a zero-waste textile.' ,
      quantity: 1,
      vendor_price: 20,
      image_name: 'upcycled-denim-dog-collar-from-the-foggy-dog.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 11,
      pet_id: 1
    },

    //------------ Dog Bowls And Feeding ------------//
    {
      name: 'Outward Hound Fun Feeder Drop, Turquoise, Large',
      description: 'Slow Feeder for obese pets' ,
      quantity: 1,
      vendor_price: 10,
      image_name: 'pet-slow-feeder.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'OurPets Comfort Elevated Dog Bowl, Black 8 Inches',
      description: 'This Feeder Is Perfect For Small Dogs' ,
      quantity: 1,
      vendor_price: 10,
      image_name: 'OurPets-Comfort-Elevated-Dog-Bowl-Black-8-Inches.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'Our Pets Durapet Stainless Steel Bowl, 7 Cups',
      description: 'Permanently-bonded rubber ring on bottom of bowl' ,
      quantity: 1,
      vendor_price: 10,
      image_name: 'OurPets-Durapet-Stainless-Steel-Bowl-7-Cups.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'Play On Matte Blue Ceramic Dog Bowl, Large, 33 Ounces',
      description: 'High-end style, oven fired and hand painted' ,
      quantity: 1,
      vendor_price: 10,
      image_name: 'Play-On-Matte-Blue-Ceramic-Dog-Bowl-Large-33-Ounces.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1
    },
    {
      name: 'Play On Floral Melamine Bowl, Small, 8 Ounces',
      description: 'Non-skid bottom allows for stable dinning' ,
      quantity: 1,
      vendor_price: 10,
      image_name: 'Play-On-Floral-Melamine-Bowl-Small-8-Ounces.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 12,
      pet_id: 1  },


    //---Dog muzzle---//
    {
      name: 'Baskerville Ultra 2.0 Muzzle',
      description: 'Ergonomically shaped muzzle for dogs, extremely robust and padded with three attachment points.' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'baskerville-ultra-2.0-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Grreat Choice® Adjustable Mesh Dog Muzzle',
      description: 'Prevent unwanted behaviors including biting, barking and chewing with the Grreat Choice Adjustable Mesh Muzzle.' ,
      quantity: 3,
      vendor_price: 3,
      image_name: 'grreat-choice-adjustable-mesh-dog-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Baskerville Ultra Dog Muzzle',
      description: 'Prevent unwanted behaviors including biting, barking and chewing with the Grreat Choice Adjustable Mesh Muzzle.' ,
      quantity: 2,
      vendor_price: 4,
      image_name: 'baskerville-ultra-dog-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Mesh Muzzle',
      description: 'Prevent unwanted behaviors including biting, barking and chewing with the Grreat Choice Adjustable Mesh Muzzle.' ,
      quantity: 4,
      vendor_price: 3,
      image_name: 'mesh-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Beaphar Gentle Anti-Pull',
      description: 'The Worlds Best Selling Headcollar That Stops Your Dog Pulling On The Lead. Adjustable Nose Loop For A Comfortable Fit. Kind Control And Effective Leadership.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'beaphar-gentle-anti-pull.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },
    {
      name: 'Mikki Muzzle',
      description: 'Mikki Muzzle (boxer) Size 8' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'mikki-muzzle.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 16,
      pet_id: 1
    },

    //---Dog transport boxes---//
    {
      name: 'HUNTER Transport Box Outdoor',
      description: 'Transport box for dogs, made from robust nylon and usable as a dog house, with extra stable metal frame and matching carry bag.' ,
      quantity: 2,
      vendor_price: 7,
      image_name: 'hunter-transport-box-outdoor.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Feria Transport Crate with Wheels',
      description: 'Transport box for dogs, ideal for flights and IATA compliant, with air vents to ensure circulation.' ,
      quantity: 2,
      vendor_price: 8,
      image_name: 'feria-transport-crate-with-wheels.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Mappa Transport Box',
      description: 'A plastic transport box for dogs, cats & small animals, removable entrance door, excellent ventilation system.' ,
      quantity: 2,
      vendor_price: 6,
      image_name: 'mappa-transport-box.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Ferplast Atlas Scenic Car Transport Box - Black',
      description: 'Car transport box for dogs, with a large mesh door and security closure, offering plenty of space.' ,
      quantity: 1,
      vendor_price: 7,
      image_name: 'ferplast-atlas-scenic-car-transport-box-black.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Easy Go Folding Transport Box',
      description: 'Comfortable transport box for dogs, perfect as a sleeping and relaxing area for camping trips or use at home.' ,
      quantity: 2,
      vendor_price: 7,
      image_name: 'easy-go-folding-transport-box.jpg',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },
    {
      name: 'Collapsible Transport Case',
      description: 'This extraordinary transport case is light and collapsible, ideal for transporting cats and small dogs weighing up to 6kg.' ,
      quantity: 2,
      vendor_price: 7,
      image_name: 'collapsible-transport-case.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 17,
      pet_id: 1
    },

    // -----Dog houses ----//

    {
      name: 'Petmate® Indigo Igloo-Style Dog House',
      description: 'The Petmate Indigo Dog House with Microban is a top-of-the-line igloo-shaped doghouse, and is a sturdy and spacious option that provides security and comfort for your dog.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Petmate®-Indigo-Igloo-Style-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Precision Pet Products® Outback Log Cabin Dog House',
      description: 'Assembles in three simple steps, a great mountain retreat just outside the backdoor' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Precision-Pet-Products®-Outback-Log-Cabin-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'TRIXIEs Log Cabin Dog House',
      description: 'Give your pet a place to escape the elements with TRIXIEs Log Cabin Dog House with peaked roof.' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'TRIXIEs-Log-Cabin-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Petmate® Dogloo XT Dog House',
      description: 'etmates Dogloo XT is an outdoor doghouse that helps to protect your dog from the elements.' ,
      quantity: 2,
      vendor_price: 3,
      image_name: 'Petmate®-Dogloo-XT-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'New Age Pet® ecoFLEX™ Bunkhouse™ Dog House',
      description: 'The New Age ecoFLEX Bunkhouse Dog House offers many wonderful features that include a traditional peaked roof line, raised floors and a step-in design. ' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'New-Age-Pet®-ecoFLEX™-Bunkhouse™-Dog House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'TRIXIEs Rustic Dog House',
      description: 'Give your pet a place to escape the elements with TRIXIEs Rustic Dog House witha charming covered porch. ' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'TRIXIEs-Rustic-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Petmate® Husky Dog House',
      description: 'Provide your dog with a place to call his own and protection from the elements while outside with this Petmate Husky Doghouse.' ,
      quantity: 4,
      vendor_price: 4,
      image_name: 'Petmate®-Husky-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },
    {
      name: 'Trixie Pet Products Dogs Inn Dog House',
      description: 'Give your pet a place to escape the elements with TRIXIEs Dogs Inn Dog House.' ,
      quantity: 2,
      vendor_price: 4,
      image_name: 'Trixie-Pet-Products-Dogs-Inn-Dog-House.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 3,
      subcategory_id: 19,
      pet_id: 1
    },

    //------- Veterinary Products --------//

    //--- Antiparasitics For Dogs ----//





    //--- Antibiotics For Dogs ----//

    {
      name: 'Enroquin (Enrofloxacin Flavored Tab) 22.7 mg, 68 mg, 136 mg',
      description: 'Enrofloxacin is an antibiotic that treats a broad range of susceptible bacterial infections.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Enroquin-(Enrofloxacin-Flavored-Tab)-22.7-mg,-68-mg,-136-mg.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Tylan Soluble Powder 100 gm',
      description: 'Tylan Soluble Powder is a powdered antibiotic that is useful in treating CRD (chronic respiratory disease), controlling American Foulbrood of honey bees, treating and controlling swine dysentery.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Tylan-Soluble-Powder-100-gm.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Albon Tablet',
      description: 'Albon is used to treat canine and feline soft tissue, enteric, genitourinary tract, and respiratory infections, including wound infections.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Albon-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Orbax Oral Suspension 30 mg/ml, 20 ml',
      description: 'Orbax Oral Suspension is used to treat wound, soft tissue, or urinary tract infections. It cannot be detected by the taste buds, which makes it easy to administer.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Orbax-Oral-Suspension-30-mg-ml,-20-ml.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Cefpoderm (Cefpodoxime Proxetil) Tablet',
      description: 'Cefpodoxime Proxetil is useful in treating skin infection.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Cefpoderm-(Cefpodoxime-Proxetil)-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Doxycycline Hyclate 100 mg Tablet',
      description: 'Doxycycline Hyclate is a bacteriostatic antibiotic that is useful in treating susceptible bacterial infections, including Lyme disease, chlamydia, and Rocky Mountain Spotted Fever.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Doxycycline-Hyclate-100-mg-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'Ketoconazole 200 mg Tablet',
      description: 'Ketoconazole is used to treat yeast infections, lung infections (histoplasmosis), aspergillosis, blastomycosis, and Cryptococcus neoformans infections (cryptococcosis). ' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Ketoconazole-200-mg-Tablet.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    {
      name: 'ANTIROBE (Clindamycin Hydrochloride) Capsules',
      description: 'Antirobe Capsules use Clindamycin Hydrochloride to treat soft tissue, dental, and bone infections caused by susceptible strains of bacteria.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'ANTIROBE-(Clindamycin-Hydrochloride)-Capsules.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 21,
      pet_id: 1
    },

    //--- Dogs fleas and wormers ----//

    {
      name: 'Frontline Plus Flea and Tick Treatment for Dogs (Large Dog, 45-88 Pounds, 6 Doses)',
      description: 'Kills fleas and ticks: Frontline flea and tick treatment for dogs kills fleas, flea eggs, lice, and ticks.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Frontline-Plus-Flea-and-Tick-Treatment-for-Dogs-(Large-Dog,-45-88-Pounds,-6-Doses).jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'TevraPet Activate II Flea and Tick Prevention for Dogs | Large 21-55 lbs | 4 Months | Fast Acting, Repels Mosquitoes',
      description: 'Effective - This broad spectrum flea and tick topical kills all stages of fleas, flea eggs, ticks, and lice' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'TevraPet-Activate-Flea-and-Tick-Prevention-for-Dogs-Large-21-55-lbs-4-Months-Fast-Acting,-Repels-Mosquitoes.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'CapAction Oral Flea Treatment Large Dog 6ct',
      description: 'TREAT RE-INFESTATIONS FAST: If your pet gets re-invested with fleas simply apply another dose as often as once a day. ' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'CapAction-Oral-Flea-Treatment-Large-Dog-6ct.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'K9 advantix II Flea and Tick Prevention for Large Dogs, 21-55 Pounds',
      description: 'Starts working to kill fleas within 12 hours and keeps working for 30 days' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'K9-advantix-Flea-and-Tick-Prevention-for-Large-Dogs,-21-55-Pounds.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'Classics Lime Sulfur Dip ',
      description: '8 oz Pet Care and Veterinary Treatment Agains Ringworm, Mange, Lice, Flea, Itchy and Dry Skin Extra Strength Formula - Safe Solution for Dog, Cat, Puppy, Kitten, Horse' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Classics-Lime-Sulfur-Dip_.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: '8in1 Safe-Guard Canine Dewormer for Small Dogs',
      description: 'Safe-Guard treats against Tapeworms, Roundworms, Hookworms, and Whipworms' ,
      quantity: 3,
      vendor_price: 4,
      image_name: '8in1-Safe-Guard-Canine-Dewormer-for-Small-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'TevraPet Activate II Flea and Tick Prevention for Dogs ',
      description: '8 Months Supply | Medicine for Treatment and Control | Topical Drops' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'TevraPet-Activate-Flea-and-Tick-Prevention-for-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },

    {
      name: 'Bayer Tapeworm Dewormer (praziquantel tablets) for Dogs,',
      description: '5-count bottle of tapeworm dewormer for dogs' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'Bayer-Tapeworm-Dewormer-(praziquantel-tablets)-for-Dogs.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 4,
      subcategory_id: 23,
      pet_id: 1
    },





    //--------------------- Cat ------------------------------//
    //--- Food ---//
    //--- Dry Food ---//
    {
      name: 'Hills Science Diet Indoor Adult Dry Cat Food - Chicken',
      description: 'During your cats adult years, you want to feed nutrition that supports everyday health and digestion.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'hills-science-diet-indoor-adult-dry-cat-food-chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Purina ONE SmartBlend Adult Cat Food',
      description: 'Serve your cat a plate of the deliciously crunchy bites and meaty, tender morsels shes been craving with Purina ONE Tender Selects Blend With Real Chicken adult dry cat food.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'purina-one-smartBlend-adult-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Purina Pro Plan Essentials Adult Cat Food',
      description: 'Capture your cats curiosity when you fill her dish with Purina Pro Plan COMPLETE ESSENTIALS Chicken & Rice Formula adult dry cat food at mealtime.' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'purina-pro-plan-essentials-adult-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Purina Friskies® Seafood Sensations Cat Food',
      description: 'Pour a purr-worthy dish full of yum with Purina Friskies Seafood Sensations dry cat food.' ,
      quantity: 2,
      vendor_price: 3,
      image_name: 'purina-friskies-seafood-sensations-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Authority Indoor Adult Cat Food - Chicken & Rice',
      description: 'Provide delicious taste while promoting better everyday health in your indoor kitty by serving Authority Everyday Health Adult Indoor Cat Food.' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'authority-indoor-adult-cat-food-chicken-&-rice.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Rachael Ray Nutrish Indoor Complete Cat Food',
      description: 'Rachael Ray Nutrish Indoor Complete Chicken with Lentils & Salmon Recipe Natural Dry Cat Food is a simple, natural food created to meet the specific needs of indoor cats.' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'rachael-ray-nutrish-indoor-complete-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Hills Science Diet Kitten Dry Cat Food - Chicken',
      description: 'Your little kitten needs premium nutrition that can keep up with their active lifestyle.' ,
      quantity: 4,
      vendor_price: 4,
      image_name: 'hills-science-diet-kitten-dry-cat-food-chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },
    {
      name: 'Royal Canin Feline Health Nutrition Indoor Adult Cat Food',
      description: 'Your indoor cats lifestyle of napping, grooming, and grazing requires a diet made for their nutritional needs.' ,
      quantity: 2,
      vendor_price: 4,
      image_name: 'royal-canin-feline-health-nutrition-indoor-adult-cat-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 26,
      pet_id: 2
    },

    //--- Cat Cans ---//
    {
      name: 'Applaws Cat Food Cans 156g - Tuna / Fish',
      description: 'Applaws premium wet food for cats - 100% natural cat food without artificial preservatives.' ,
      quantity: 3,
      vendor_price: 4,
      image_name: 'applaws-cat-food-cans-156g-tuna-fish.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Applaws Cat Food Cans 156g - Tuna / Fish',
      description: 'The delicate broth and tender meat pieces are the perfect way to entice your cat to drink more.' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'smilla-cat-drink-with-chicken.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: '70g Applaws Mousse',
      description: 'Delicious supplementary food for adult cats, in a soft, light mousse with natural ingredients.' ,
      quantity: 4,
      vendor_price: 5,
      image_name: '70g-applaws-mousse.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Bozita Canned Food 6 x 410g',
      description: 'Bozita cat food is a complete food from Sweden for cats of all lifestyles and ages.' ,
      quantity: 4,
      vendor_price: 5,
      image_name: 'bozita-canned-food-6x410g.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Purina Pro Plan Cat Food - Chicken & Turkey',
      description: 'Let your cat pick her mealtime favorites when you stock your pantry with this Purina Pro Plan Chicken and Turkey Favorites adult wet cat food variety pack.' ,
      quantity: 4,
      vendor_price: 5,
      image_name: 'purina-pro-plan-cat-food-chicken&turkey.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    {
      name: 'Royal Canin® Feline Health Nutrition™ Instinctive Kitten Food',
      description: 'Royal Canin Thin Slices in Gravy is formulated to match the instinctively preferred macronutrient profile of your energetic kitten, ensuring long-time palatability.' ,
      quantity: 4,
      vendor_price: 5,
      image_name: 'royal-canin-feline-health-nutrition-instinctive-kitten-food.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 27,
      pet_id: 2
    },
    //--- Cat Treats ---//
    {
      name: 'thrive Cat Treats',
      description: '100% natural and additive-free cat snacks made only from 100% fresh meat or fish.' ,
      quantity: 4,
      vendor_price: 5,
      image_name: 'thrive-cat-treats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Dreamies Mix Cat Treats 60g',
      description: 'Each pack of Dreamies Mix Cat Treats contains 2 delicious flavours.' ,
      quantity: 4,
      vendor_price: 5,
      image_name: 'dreamies-mix-cat-treats-60g.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Big Pack Dreamies Cat Treats 180g',
      description: 'All cats dream about these crunchy squares filled with a scrumptious soft centre.' ,
      quantity: 3,
      vendor_price: 5,
      image_name: 'big-pack-dreamies-cat-treats-180g.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Catz Finefood Meatz Treats',
      description: 'These high-quality cat treats boast 98% tender Swiss meat, with just a single protein source per variety.' ,
      quantity: 4,
      vendor_price: 6,
      image_name: 'catz-finefood-meatz-treats.jpg',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
    {
      name: 'Only Natural Pet Hemp Calming Support Soft Dog Chews',
      description: 'Only Natural Pet Just Relax Herbal Calming Support Chews are holistically formulated natural calming treat for dogs to help reduce stress-related behavior and promise relaxation.' ,
      quantity: 2,
      vendor_price: 5,
      image_name: 'only-natural-pet-just-relax-herbal-calming-support-soft-dog-chews.jps',
      status: 3,
      vendor_id: 5,
      product_category_id: 5,
      subcategory_id: 28,
      pet_id: 2
    },
  ]);

};
