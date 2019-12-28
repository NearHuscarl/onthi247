import React from 'react';
import PropTypes from 'prop-types';
import styled from '../styles';
import timeSince from '../utilities/timeSince';
import { userProps } from '../utilities/proptypes';

const User = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
	column-gap: 0.7rem;

	width: 12rem;

	& > :first-child {
		grid-column: 1 / -1;
		font-size: 0.9rem;
	}

	img {
		grid-row: 2 / 4;

		margin-top: 0.58rem;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.2);
	}

	.name {
		margin-top: 0.58rem;
		font-size: 1rem;
		font-weight: 600;
	}

	.level {
		font-size: 1rem;
	}
`;
export default function QaProfile({ user, date }) {
	return (
		<User>
			<div>{`đã hỏi cách đây ${timeSince(new Date(date))}`}</div>
			<img src={user.avatar} alt='user profile' />
			<div className='name'>{user.name}</div>
			<div className='level'>{`Level: ${user.level}`}</div>
		</User>
	);
}

QaProfile.propTypes = {
	user: userProps.isRequired,
	date: PropTypes.string.isRequired,
};
