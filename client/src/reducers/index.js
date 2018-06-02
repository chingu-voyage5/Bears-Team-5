import { combineReducers } from 'redux';
import user from './user';
import login from './login';

// Uses combineReducers to combine all the reducers
const appReducer = combineReducers({
  user,
  login,
});


export default (state, action) => appReducer(state, action);
