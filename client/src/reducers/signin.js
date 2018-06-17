import * as actions from '../actions/auth';

const initialState = {
  isFetching: false,
  errors: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.SIGNIN.REQUEST:
      return { ...state, isFetching: true, errors: {} };
    case actions.SIGNIN.SUCCESS:
      return { ...state, isFetching: false, errors: {} };

    case actions.SIGNIN.FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    default: return state;
  }
};
