import { createRequestTypes, createAction } from '../utils';


/** *************************************************
 * Login
 */
export const SIGNIN = createRequestTypes('SIGNIN');

export const signin = {
  request: signinData => createAction(SIGNIN.REQUEST, { signinData }),
  success: () => createAction(SIGNIN.SUCCESS),
  failure: errors => createAction(SIGNIN.FAILURE, { errors }),
};


/** *************************************************
 * Signup
 */
export const SIGNUP = createRequestTypes('SIGNUP');

export const signup = {
  request: signupData => createAction(SIGNUP.REQUEST, { signupData }),
  success: () => createAction(SIGNUP.SUCCESS),
  failure: errors => createAction(SIGNUP.FAILURE, { errors }),
};