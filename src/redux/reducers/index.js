import { combineReducers } from 'redux';
import toDoListReducer from './task.reducer';

export default combineReducers({
  toDoListReducer: toDoListReducer
})