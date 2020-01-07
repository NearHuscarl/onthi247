import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import exerciseResultReducer from '../reducers/exerciseResult';
import exercisesReducer from '../reducers/exercises';
import exerciseQuestionsReducer from '../reducers/exerciseQuestions';
import standingReducer from '../reducers/standing';
import exerciseStandingReducer from '../reducers/exerciseStanding';
import questionsReducer from '../reducers/questions';

const store = createStore(
	combineReducers({
		exerciseResult: exerciseResultReducer,
		exercises: exercisesReducer,
		exerciseQuestions: exerciseQuestionsReducer,
		standings: standingReducer,
		exerciseStanding: exerciseStandingReducer,
		questions: questionsReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
