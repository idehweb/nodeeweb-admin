import { combineReducers } from 'redux';
import  themeDataReducer  from './themeDataReducer';

export default combineReducers({
  themeData: themeDataReducer
});
