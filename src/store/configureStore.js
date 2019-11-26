import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import examResultReducer from '../reducers/examResult';
import examsReducer from '../reducers/exams';
import examQuestionsReducer from '../reducers/examQuestions';
import standingReducer from '../reducers/standing';
import examStandingReducer from '../reducers/examStanding';

const store = createStore(
	combineReducers({
		examResult: examResultReducer,
		exams: examsReducer,
		examQuestions: examQuestionsReducer,
		standings: standingReducer,
		examStanding: examStandingReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
