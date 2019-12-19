import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rankProps, examRankProps } from '../utilities/proptypes';
import Line from './Line';

const List = styled.ul`
	& > :not(:last-child) {
		margin-bottom: 1.2rem;
	}
`;
const ListItem = styled.li`
	display: flex;

	img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin-right: 1.5rem;
	}
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	> * {
		// override bs
		margin-bottom: 0;
	}
`;

export function Rank({ info }) {
	return (
		<ListItem>
			<img src={info.avatar} alt='user avatar' />
			<Content>
				<h4 className='h4'>{info.name}</h4>
				<p>{`Level: ${info.level}`}</p>
			</Content>
		</ListItem>
	);
}

Rank.propTypes = {
	info: rankProps.isRequired,
};

export function ExamRank({ info }) {
	return (
		<ListItem>
			<img src={info.avatar} alt='user avatar' />
			<Content>
				<h4 className='h4'>{info.name}</h4>
				<p>{`${info.score}/30 - ${info.time}`}</p>
			</Content>
		</ListItem>
	);
}

ExamRank.propTypes = {
	info: examRankProps.isRequired,
};

function createStanding(getRank) {
	const Standing = ({ className, title, standing }) => (
		<section className={className}>
			<h3 className='h3 mb-sm'>{title}</h3>
			<List>
				{standing.map((u, index) => (
					<React.Fragment key={u.name}>
						{getRank(u)}
						{index !== standing.length - 1 ? <Line /> : null}
					</React.Fragment>
				))}
			</List>
		</section>
	);
	Standing.propTypes = {
		className: PropTypes.string,
		title: PropTypes.string.isRequired,
		standing: PropTypes.arrayOf(PropTypes.object).isRequired,
	};
	Standing.defaultProps = {
		className: '',
	};

	return Standing;
}

const Standing = createStanding((u) => <Rank info={u} />);
const ExamStanding = createStanding((u) => <ExamRank info={u} />);

export { Standing, ExamStanding };
