import { combineReducers } from 'redux';
import currentUser  from './userReducer';
import calculations from './calculationReducer';

const rootReducer = combineReducers({
	currentUser,
	calculations,
});

export default rootReducer;
