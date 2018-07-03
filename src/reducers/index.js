import { combineReducers } from 'redux';
import fighterReducer from './fighterReducer';

const appReducer = combineReducers({
  fighters: fighterReducer
});

export default appReducer;
