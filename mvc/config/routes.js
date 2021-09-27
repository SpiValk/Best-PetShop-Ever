/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  '/'                         : {action:'indexcontroller'},


  '/ourteam'                  : { view: 'pages/static/ourteam'},
  '/contactus'                : { view: 'pages/static/contactus'},
  '/home'                     : { action: 'indexcontroller'},


  '/privacy-policy'           : { view: 'pages/static/privacy-policy'},
  '/delivery'                 : { view: 'pages/static/delivery'},



  '/terms-and-conditions'     : { view: 'pages/static/terms-and-conditions'},

  '/ways-to-order'            : { view: 'pages/static/ways-to-order'},
  '/policy-of-return'         : { view: 'pages/static/policy-of-return'},
  '/reason-to-smile'          : { view: 'pages/static/reason-to-smile'},





  'GET /addtocart'       : { action:'addtocartcontroller' },





  // Admin Products
  'GET /products'             : { action: 'products/list'},
  'GET /products/new'         : { action: 'products/new'},
  'POST /products/new'        : { action: 'products/save'},
  'GET /products/delete/:id'  : { action: 'products/delete'},
  'GET /products/edit/:id'    : { action: 'products/edit'},
  'GET /products/update/:id'  : { action: 'products/update'},

  'GET /categories/:pet'     : { action: 'petcategorycontroller'},
  'GET /products/view/:id'   : { action: 'productviewcontroller'},




  //Users
  'GET  /login'                    : { action: 'users/login' },
  'POST /login'                    : { action: 'users/checklogin' },
  'GET  /register'                 : { action: 'users/register' },
  'POST /register'                 : { action: 'users/savenewuser' },
  'GET  /logout'                   : { action: 'users/logout' },
  'GET  /users/info'                : { action: 'users/userinfo'},











  //Dog
  'GET /products/dog/:category'               : { action: 'dog/categoriescontroller'},
  'GET /products/dog/category/:subcategory'   : { action: 'dog/subcategoriescontroller'},

  //Cat
  'GET /products/cat/:category'               : { action: 'cat/categoriescontroller'},
  'GET /products/cat/category/:subcategory'   : { action: 'cat/subcategoriescontroller'},

  //Fish
  'GET /products/fish/:category'              : { action: 'fish/categoriescontroller'},
  'GET /products/fish/category/:subcategory'  : { action: 'fish/subcategoriescontroller'},

  //Bird
  'GET /products/bird/:category'              : { action: 'bird/categoriescontroller'},
  'GET /products/bird/category/:subcategory'  : { action: 'bird/subcategoriescontroller'},

  //Small Animals
  'GET /products/small-animals/:category'         : { action: 'smallanimals/categoriescontroller'},
  'GET /products/small-animals/category/:subcategory'  : { action: 'smallanimals/subcategoriescontroller'},


  //sorting
  //   'GET /products/:pet/category/:subcategory/:filtering/:order' :{ action: 'sorting'},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
