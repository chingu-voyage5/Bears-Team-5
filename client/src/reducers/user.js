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
    case actions.GET_USER.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: !!action.user,
        profile: action.user,
      };
    case actions.GET_USER.FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };
    case actions.USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        username: action.user.username,
        email: action.user.email,
      };
    case actions.USER_LOGOUT:
      return {
        ...initialState,
      };
    default: return state;
  }
};
