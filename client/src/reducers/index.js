import { combineReducers } from 'redux';
import user from './user';

// Uses combineReducers to combine all the reducers
const appReducer = combineReducers({
  user,
});


export default (state, action) => appReducer(state, action);
