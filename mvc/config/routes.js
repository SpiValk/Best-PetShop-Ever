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

  '/': { view: 'pages/index' },

  '/ourteam' :{view: 'pages/static/ourteam'},
  '/contactus' :{view: 'pages/static/contactus'},
  '/home' :{view: 'pages/index'},



  // Product
  'GET /products'             : { action: 'products/list'},
  'GET /products/new'         : { action: 'products/new'},
  'POST /products/new'        : { action: 'products/save'},
  'GET /products/delete/:id'  : { action: 'products/delete'},
  'GET /products/edit/:id'    : { action: 'products/edit'},
  'GET /products/update/:id'  : { action: 'products/update'},

  //Dog
  'GET /products/dog'            : { action: 'dog/dogcontroller'},
  'GET /products/dog/food'       : { action: 'dog/foodcontroller'},
  'GET /products/dog/grooming'   : { action: 'dog/groomcontroller'},
  'GET /products/dog/accessories': { action: 'dog/accessoriescontroller'},
  'GET /products/dog/vetinary'   : { action: 'dog/vetinarycontroller'},


  //Cat
  'GET /products/cat'         : { action: 'cat'},



  //Fish
  'GET /products/fish'        : {action: 'fish/fishcontroller'},
  'GET /products/fish/food'   : {action: 'fish/foodcontroller'}


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
