import React from 'react';
import Pagination from '../components/Pagination';
import { SizedBox } from '../components/Common';
import { Notifications } from '../components/NotificationTooltip';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import ContentContainer from '../layout/ContentContainer';
import styled from '../styles';
import notifications from '../data/notifications';

const Main = styled.main`
	margin-bottom: 7rem;

    .top {
        margin-bottom: 1rem;

        .top-button {
            font-size: 1.3rem;
        }
    }
	.title {
		font-size: 2rem;
	}
`;

const NotificationPage = () => (
	<Main>
		<Breadcrumb path={[routes.home, routes.notification]} />
		<SizedBox height={2.5} />
		<ContentContainer>
			<Notifications list={notifications} />
			<SizedBox height={3.5} />
			<Pagination />
		</ContentContainer>
	</Main>
);

export default NotificationPage;
