/* eslint react/jsx-filename-extension: off */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import AppRouter from './AppRouter';
import 'normalize.css/normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-tabs/style/react-tabs.css';
import 'video-react/dist/video-react.css';
import 'react-circular-progressbar/dist/styles.css';
import './styles/main.scss';
import { createGlobalStyle, appColors, theme } from './styles';

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 62.5%; /* 10px/16px -> 1rem = 10px */

		/*
		@include response(big-desktop) {
		    font-size: 75%; // 1rem = 12px; 12px/16px = 75%
		}
		@include response(tab-land) {
		    font-size: 56.25%; // 1rem = 9px; 9px/16px = 56.25%
		}
		@include response(tab-port) {
		    font-size: 50%; // 1rem = 8px; 8px/16px = 50%
		}
		*/
	}

	body {
		background-color: ${appColors.white};
		color: ${theme.fontColor};
		min-height: 100vh;

		/* font */
		font-family: ${theme.displayFont};
		font-size: 1.4rem;
		line-height: 1.5;
	}

	::selection {
		background-color: ${appColors.primary};
		color: ${appColors.white};
	}

	ul {
		list-style: none;
	}

	a,
	a:link,
	a:visited {
		text-decoration: none;
	}
`;

const renderApp = () => {
	ReactDOM.render(
		<>
			<GlobalStyle />
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</>,
		document.getElementById('app'),
	);
};

renderApp();
