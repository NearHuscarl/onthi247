import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ExamResultPage from './pages/ExamResultPage';
import ExamPage from './pages/ExamPage';
import constants from './constants';
import ExamPreviewPage from './pages/ExamPreviewPage';
import ExamQuestionsPage from './pages/ExamQuestionsPage';
import QuestionsPage from './pages/QuestionsPage';
import AnswerPage from './pages/AnswerPage';
import AskPage from './pages/AskPage';
import ExercisesPage from './pages/ExercisesPage';
import ExercisePreviewPage from './pages/ExercisePreviewPage';
import CoursesPage from './pages/CoursesPage';
import CoursePreviewPage from './pages/CoursePreviewPage';
import CourseDetailPage from './pages/CourseDetailPage';

const isCourseDetail = (path) => /\/course\/\d+\/?$/.test(path);

const AppRouter = () => (
	// path='/' would match https://nearhuscarl.github.io
	// but the gh-page is at https://nearhuscarl.github.io/<repoName>
	<BrowserRouter basename={`/${constants.repoName}/`}>
		{/* https://stackoverflow.com/a/46824062/9449426 */}
		<Route
			render={({ location }) => {
				const path = location.pathname;
				return !isCourseDetail(path) && <Header />;
			}}
		/>
		<Switch>
			<Route path='/' component={CoursesPage} exact />
			<Route path='/courses' component={CoursesPage} exact />
			<Route
				path='/course/001/preview'
				component={CoursePreviewPage}
				exact
			/>
			<Route path='/course/001' component={CourseDetailPage} exact />
			<Route path='/exams' component={ExamPage} exact />
			<Route path='/exams/:id/preview' component={ExamPreviewPage} exact />
			<Route
				path='/exams/:id/questions'
				component={ExamQuestionsPage}
				exact
			/>
			<Route path='/exams/:id/result' component={ExamResultPage} exact />
			<Route path='/questions' component={QuestionsPage} exact />
			<Route path='/questions/ask' component={AskPage} exact />
			<Route path='/questions/001' component={AnswerPage} exact />
			<Route path='/exercises' component={ExercisesPage} exact />
			<Route path='/exercises/001' component={ExercisePreviewPage} exact />
			<Route component={NotFoundPage} />
		</Switch>
		<Footer />
	</BrowserRouter>
);

export default AppRouter;
