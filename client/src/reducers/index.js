import { combineReducers } from 'redux';
import user from './user';
import login from './login';
import signup from './signup';
import goals from './goals';

// Uses combineReducers to combine all the reducers
const appReducer = combineReducers({
  user,
  login,
  signup,
  goals,
});


export default (state, action) => appReducer(state, action);
