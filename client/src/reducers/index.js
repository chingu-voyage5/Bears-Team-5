import { combineReducers } from 'redux';
import user from './user';
import login from './login';
import signup from './signup';

// Uses combineReducers to combine all the reducers
const appReducer = combineReducers({
  user,
  login,
  signup,
});


export default (state, action) => appReducer(state, action);
