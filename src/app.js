/* eslint react/jsx-filename-extension: off */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-tabs/style/react-tabs.css';
import './styles/main.scss';

const commitHash = (
	<div className='commit-hash'>{`commit hash: ${process.env.COMMIT_SHA}`}</div>
);

const renderApp = () => {
	ReactDOM.render(
		<>
			<Provider store={store}>
				<AppRouter />
			</Provider>
			{commitHash}
		</>,
		document.getElementById('app'),
	);
};

renderApp();
