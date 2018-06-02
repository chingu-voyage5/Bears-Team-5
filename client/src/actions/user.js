import { createAction } from '../utils';


/** *****************************************************************
 * User login/logout
 */
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = user => createAction(USER_LOGIN, { user });
export const userLogout = () => createAction(USER_LOGOUT);
