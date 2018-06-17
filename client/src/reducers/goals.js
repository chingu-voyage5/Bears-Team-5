import * as actions from '../actions/goals';

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
