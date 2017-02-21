import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';

	//Define the properties of our application state here
	const rootReducer = combineReducers({
  		bands: BandsReducer,
	});

	export default rootReducer;