import { combineReducers } from 'redux'
import counter from './reducer-counter'

const allReducers = combineReducers({
	counter: counter
});

export default allReducers;