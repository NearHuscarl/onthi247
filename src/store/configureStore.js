import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import examResultReducer from '../reducers/examResult';
import examReducer from '../reducers/exam';

const store = createStore(
	combineReducers({
		examResult: examResultReducer,
		exam: examReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
