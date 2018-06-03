import { createRequestTypes, createAction } from '../utils';


/** *************************************************
 * Login
 */
export const LOGIN = createRequestTypes('LOGIN');

export const login = {
  request: loginData => createAction(LOGIN.REQUEST, { loginData }),
  success: () => createAction(LOGIN.SUCCESS),
  failure: errors => createAction(LOGIN.FAILURE, { errors }),
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
