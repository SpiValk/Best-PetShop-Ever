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

  '/'                         : { view: 'pages/index' },


  '/ourteam'                  : { view: 'pages/static/ourteam'},
  '/contactus'                : { view: 'pages/static/contactus'},
  '/home'                     : { view: 'pages/index'},


  '/privacy-policy'           : { view: 'pages/static/privacy-policy'},
  '/delivery'                 : { view: 'pages/static/delivery'},



  '/terms-and-conditions'     : { view: 'pages/static/terms-and-conditions'},

  '/ways-to-order'            : { view: 'pages/static/ways-to-order'},
  '/policy-of-return'         : { view: 'pages/static/policy-of-return'},
  '/reason-to-smile'          : { view: 'pages/static/reason-to-smile'},


  // '/login' :{view: 'pages/users/login'},
  // '/register' :{view: 'pages/users/register'},
  // '/logout' :{view: 'pages/index'},



  'GET /categories/:pet'     : { action: 'petcategorycontroller'},


  '/ourteam'                 :{view: 'pages/static/ourteam'},
  '/contactus'               :{view: 'pages/static/contactus'},
  '/home'                    :{view: 'pages/index'},
  
  'GET /categories/:pet'     : { action: 'petcategorycontroller'},
  'GET /products/view/:id'   : { action: 'productviewcontroller'},
  'GET /addtocart/:id'       : { action:'addtocartcontroller' },




  // Product
  'GET /products'             : { action: 'products/list'},
  'GET /products/new'         : { action: 'products/new'},
  'POST /products/new'        : { action: 'products/save'},
  'GET /products/delete/:id'  : { action: 'products/delete'},
  'GET /products/edit/:id'    : { action: 'products/edit'},
  'GET /products/update/:id'  : { action: 'products/update'},

  // Log in / log out user or admin
  // '/login'                    : { action: 'users/login' },
  // 'POST /login'               : { action: 'users/checklogin' },
  // 'GET /register'             : { action: 'users/register' },
  // 'POST /register'            : { action: 'users/savenewuser' },
  // 'GET /logout'               : { action: 'users/logout' },


  //Dog
  'GET /products/dog/:category'                         : { action: 'dog/categoriescontroller'},
  'GET /products/dog/category/:subcategory'             : { action: 'dog/subcategoriescontroller'},
  //Dog product DELETE
  'GET /products/dog/delete:id'                         : { action: 'dog/deleteproductcontroller'},
  //Dog category DELETE
  'GET /products/dog/category/delete/:id'               : { action: 'dog/deleteproductcategorycontroller'},
  //Dog subcategory DELETE
  'GET /products/dog/category/subcategory/delete/:id'   : { action: 'dog/deletesubcategorycontroller'},


  
  //Cat
  'GET /products/cat/:category'                         : { action: 'cat/categoriescontroller'},
  'GET /products/cat/category/:subcategory'             : { action: 'cat/subcategoriescontroller'},
  //Cat product DELETE
  'GET /products/cat/delete/:id'                        : { action: 'cat/deleteproductcontroller'},
  // Cat category DELETE
  'GET /products/cat/category/delete/:id'               : { action: 'cat/deleteproductcategorycontroller'},
  //Cat subcategory DELETE
  'GET /products/cat/category/subcategory/delete/:id'   : { action: 'cat/deletesubcategorycontroller'},


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
