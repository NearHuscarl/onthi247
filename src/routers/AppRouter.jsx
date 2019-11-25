import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ExamResultPage from '../pages/ExamResultPage';
import ExamPage from '../pages/ExamPage';
import constants from '../constants';
import ExamPreviewPage from '../pages/ExamPreviewPage';

const AppRouter = () => (
	// path='/' would match https://nearhuscarl.github.io
	// but the gh-page is at https://nearhuscarl.github.io/<repoName>
	<BrowserRouter basename={`/${constants.repoName}/`}>
		<Route path='/' component={Header} />
		<Switch>
			<Route path='/' component={ExamResultPage} exact />
			<Route path='/exams' component={ExamPage} exact />
			<Route path='/exams/:id/preview' component={ExamPreviewPage} exact />
			<Route component={NotFoundPage} />
		</Switch>
		<Footer />
	</BrowserRouter>
);

export default AppRouter;
