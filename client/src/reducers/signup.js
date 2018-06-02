import * as actions from '../actions/auth';

const initialState = {
  isFetching: false,
  errors: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.SIGNUP.REQUEST:
      return { ...state, isFetching: true, errors: {} };
    case actions.SIGNUP.SUCCESS:
      return { ...state, isFetching: false, errors: {} };

    case actions.SIGNUP.FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    default: return state;
  }
};
