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

  //------------------CREATE PRODUCT CATEGORIES --------------//
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
  ]);

  //------------------ CREATE SUBCATEGORIES -------------------//
  await Product_subcategory.createEach([
    //------ FOODS -------//
    {subcategory: 'dry-food', category_id: 1},
    {subcategory: 'dog-cans', category_id: 1},
    {subcategory: 'dog-treats-and-chews', category_id: 1},
    //------ GROOMING -------//
    {subcategory: 'dog-diapers', category_id: 2},
    {subcategory: 'dog-shampoo', category_id: 2},
    {subcategory: 'dog-brushes-and-combs', category_id: 2},
    {subcategory: 'dog-scissors-and-clippers', category_id: 2},
    {subcategory: 'perfumes-and-fragrances', category_id: 2},
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
    {subcategory: 'dog-antiparasitics', category_id: 4},
    {subcategory: 'dog-antibiotics', category_id: 4},
    {subcategory: 'wound-care', category_id: 4},
    {subcategory: 'dog-fleas-and-wormers', category_id: 4},
    {subcategory: 'vitamins-minerals-electrolytes', category_id: 4},
    {subcategory: 'barf', category_id: 1},//---FOODS---//
  ]);


  //-------------------------- CREATE PRODUCTS --------------------//

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
    {
      name: 'Drontal Tasty Bone Wormer Tablets',
      description: 'Drontal Tasty Bone worming tablets work fast to kill every type of intestinal worm commonly found in UK dogs, giving you peace of mind that you are helping keep internal parasites away from your pet and family. ',
      quantity: 1,
      vendor_price: 5,
      image_name: 'Drontal-Tasty-Bone-Worming-Tablets-for-Dogs-1-Tablet_1.jpeg',
      status: 1,
      vendor_id: 6,
      product_category_id: 4,
      subcategory_id: 23,
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


    //**** DOG ACCESORIES/DOG TOYS ******//
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
      subcategory_id: 14,
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
      subcategory_id: 17,
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
      name: "Arcadia Trail™ Reflective Rope Dog Leash: 4-ft long",
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
      name: "Lucy & Co. Dilly Lily Dog Leash",
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
      name: "KONG® Reflective Pocket Dog Harness",
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
    {
      name: 'KONG® Reflective Padded Hands-Free Dog Leash',
      description: 'The KONG Reflective Padded Hands-Free Leash offers you more freedom while still being in control on walks with your furry friend' ,
      quantity: 1,
      vendor_price: 5,
      image_name: 'KONG-Reflective-Padded-Hands-Free-Dog-Leash.png',
      status: 1,
      vendor_id: 6,
      product_category_id: 3,
      subcategory_id: 14,
      pet_id: 1
    },




  ]);
  // ```
};
