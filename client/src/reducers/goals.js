/* import * as actions from '../actions/goals';

const initialState = {
  dailyGoals: {
    data: [],
    isFetching: false,
    errors: {},
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.DAILY_GOALS.REQUEST:
      return {
        ...state,
        dailyGoals: {
          ...state.dailyGoals,
          isFetching: true,
          errors: {},
        },
      };
    case actions.DAILY_GOALS.SUCCESS:
      return {
        ...state,
        dailyGoals: {
          data: action.data,
          isFetching: false,
          errors: {},
        },
      };
    case actions.DAILY_GOALS.FAILURE:
      return {
        ...state,
        dailyGoals: {
          ...state.dailyGoals,
          isFetching: false,
          errors: action.errors,
        },
      };
    default: return state;
  }
};
 */

import { GET_USER, USER_LOGIN, USER_LOGOUT } from '../actions/user';

const InitialState = {
  isFetching: false,
  data: [],
  errors: {},
};

export default (state = InitialState, action = {}) => {
  switch (action.type) {
    case GET_USER.REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case USER_LOGIN:
    case GET_USER.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.user ? action.user.longgoals : [],
      };
    case GET_USER.FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case USER_LOGOUT:
      return InitialState;
    default: return state;
  }
};
