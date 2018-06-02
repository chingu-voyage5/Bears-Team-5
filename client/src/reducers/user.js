import * as actions from '../actions/user';

const initialState = {
  isAuthenticated: false,
  username: '',
  email: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
