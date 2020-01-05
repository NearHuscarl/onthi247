import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
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
import DocumentsPage from './pages/DocumentsPage';
import DocumentPreviewPage from './pages/DocumentPreviewPage';
import CoursesPage from './pages/CoursesPage';
import CoursePreviewPage from './pages/CoursePreviewPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import StandingPage from './pages/StandingPage';

const isCourseDetail = (path) => /\/course\/\d+\/?$/.test(path);

const AppRouter = () => {
	const {
		home,
		courses,
		cart,
		checkout,
		register,
		login,
		forgotPassword,
		changePassword,
		standing,
		exercise,
		document,
	} = routes;

	return (
		<BrowserRouter basename={`/${constants.repoName}/`}>
			<Route
				render={({ location }) => {
					const path = location.pathname;
					return !isCourseDetail(path) && <Header />;
				}}
			/>
			<Switch>
				<Route path={home.path} component={CoursesPage} exact />
				<Route path={register.path} component={RegisterPage} exact />
				<Route path={login.path} component={LoginPage} exact />
				<Route
					path={forgotPassword.path}
					component={ForgotPasswordPage}
					exact
				/>
				<Route
					path={changePassword.path}
					component={ChangePasswordPage}
					exact
				/>
				<Route path={courses.path} component={CoursesPage} exact />
				<Route path={standing.path} component={StandingPage} exact />
				<Route
					path='/course/001/preview'
					component={CoursePreviewPage}
					exact
				/>
				<Route path='/course/001' component={CourseDetailPage} exact />
				<Route path={cart.path} component={CartPage} exact />
				<Route path={checkout.path} component={CheckoutPage} exact />
				<Route path='/exams' component={ExamPage} exact />
				<Route
					path='/exams/:id/preview'
					component={ExamPreviewPage}
					exact
				/>
				<Route
					path='/exams/:id/questions'
					component={ExamQuestionsPage}
					exact
				/>
				<Route path='/exams/:id/result' component={ExamResultPage} exact />
				<Route path='/questions' component={QuestionsPage} exact />
				<Route path='/questions/ask' component={AskPage} exact />
				<Route path='/questions/001' component={AnswerPage} exact />
				<Route path={document.path} component={DocumentsPage} exact />
				<Route
					path={`${document.path}/001`}
					component={DocumentPreviewPage}
					exact
				/>
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRouter;
