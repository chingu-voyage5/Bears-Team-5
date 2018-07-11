// /* eslint-disable no-case-declarations */
// import * as actions from '../actions/user';

// const initialState = {
//   isAuthenticated: false,
//   isFetching: false,
//   errors: {},
//   profile: {},
// };

// export default (state = initialState, action = {}) => {
//   switch (action.type) {
//     case actions.GET_USER.REQUEST:
//       return {
//         ...state,
//         isFetching: true,
//       };
//     case actions.USER_LOGIN:
//     case actions.GET_USER.SUCCESS:
//       const newState = {
//         ...state,
//         isFetching: false,
//       };

//       if (action.user) {
//         const { user: { longgoals, ...profile } } = action;
//         newState.profile = profile;
//         newState.isAuthenticated = !!profile;
//       }

//       return newState;
//     case actions.GET_USER.FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         errors: action.errors,
//       };
//     case actions.USER_LOGOUT:
//       return initialState;
//     default: return state;
//   }
// };

import { GET_USER, USER_LOGOUT } from '../actions/user';
import { SIGNIN, SIGNUP } from '../actions/auth';

const INITIAL_STATE = {
  isAuthenticated: false,
  isFetching: true,
  errors: {},
  profile: {},
};

/* eslint-disable no-case-declarations */
export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER.REQUEST:
    case SIGNIN.REQUEST:
    case SIGNUP.REQUEST:
      return { ...state, isFetching: true };
    case GET_USER.SUCCESS:
    case SIGNIN.SUCCESS:
    case SIGNUP.SUCCESS:
      const newState = {
        ...state,
        isFetching: false,
        errors: action.errors || {},
      };
      if (action.user) {
        // Omit longgoals from fetched user profile
        const { user: { longgoals, ...profile } } = action;
        newState.profile = profile;
        newState.isAuthenticated = true;
      }
      return newState;
    case GET_USER.FAILURE:
    case SIGNIN.FAILURE:
    case SIGNUP.FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default: return state;
  }
};
