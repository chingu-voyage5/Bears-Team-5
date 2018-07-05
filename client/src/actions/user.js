import { createRequestTypes, createAction } from '../utils';


/** *****************************************************************
 * User login/logout
 */
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = user => createAction(USER_LOGIN, { user });
export const userLogout = () => createAction(USER_LOGOUT);


/** *************************************************
 * Authed user
 */
export const GET_USER = createRequestTypes('GET_USER');

export const getUser = {
  request: getUserData => createAction(GET_USER.REQUEST, { getUserData }),
  success: ({ user }) => createAction(GET_USER.SUCCESS, { user }),
  failure: errors => createAction(GET_USER.FAILURE, { errors }),
};
