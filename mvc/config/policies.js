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

  //   Admin
  'products'           :  'users/isAdmin',
  'products/list'      :  'users/isAdmin',
  'products/new'       :  'users/isAdmin',
  'products/save'      :  'users/isAdmin',
  'products/edit'      :  'users/isAdmin',
  'products/update'    :  'users/isAdmin',
  'products/delete'    :  'users/isAdmin',


  //Users
  'users/register'     :  'users/isNotLoggedIn',
  'users/login'        :  'users/alreadyLoggedIn',
  'users/logout'       :  'users/isLoggedIn',
  'users/userinfo'     :  'users/isLoggedIn',

};

