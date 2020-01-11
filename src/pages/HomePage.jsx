import React from 'react';
import { AnnouncementPageBuilder } from './AnnouncementPage';
import intro from '../data/intro';
import Intro from '../../public/images/intro.png';
import routes from '../routes';

const HomePage = () => (
	<AnnouncementPageBuilder
		path={[routes.home, routes.intro]}
		title='Giới thiệu về NearAcademy'
		image={Intro}
		body={intro}
	/>
);

export default HomePage;
