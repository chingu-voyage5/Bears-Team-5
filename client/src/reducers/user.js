/* eslint-disable no-case-declarations */
import * as actions from '../actions/user';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  errors: {},
  profile: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.GET_USER.REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actions.USER_LOGIN:
    case actions.GET_USER.SUCCESS:
      const newState = {
        ...state,
        isFetching: false,
      };

      if (action.user) {
        const { user: { longgoals, ...profile } } = action;
        newState.profile = profile;
        newState.isAuthenticated = !!profile;
      }

      return newState;
    case actions.GET_USER.FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };
    case actions.USER_LOGOUT:
      return initialState;
    default: return state;
  }
};
