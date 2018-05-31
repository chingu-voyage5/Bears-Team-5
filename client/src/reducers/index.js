import { combineReducers } from 'redux';


// Uses combineReducers to combine all the reducers
const appReducer = combineReducers({});


export default (state, action) => appReducer(state, action);
