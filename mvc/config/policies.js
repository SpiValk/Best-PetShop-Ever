/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  // User login
  // 'products/list' :true,    <---- which page we want to be seen from CUSTOMER and not a USER
  'cat/*' : 'users/isLoggedIn',
  
  // Admin login
  'dog/*' : 'users/isAdmin',

  'users/register'  : 'users/isNotLoggedIn',
  'users/login'     : 'users/alreadyLoggedIn',


};
