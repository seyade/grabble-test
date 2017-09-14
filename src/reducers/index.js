import { combineReducers } from 'redux';
import texts from './grabbleTextReducer';

const  rootReducer = combineReducers({
  texts,
});

export default rootReducer;
