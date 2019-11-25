import React from 'react';
import PropTypes from 'prop-types';
import { rankProps, examRankProps } from '../utilities/proptypes';

export function Rank({ info }) {
	return (
		<li className='standing__rank'>
			<img
				className='standing__avatar'
				src={info.avatar}
				alt='user avatar'
			/>
			<div className='standing__info'>
				<h4 className='h4 standing__name'>{info.name}</h4>
				<p className='standing__stats'>{`Level: ${info.level}`}</p>
			</div>
		</li>
	);
}

Rank.propTypes = {
	info: rankProps.isRequired,
};

export function ExamRank({ info }) {
	return (
		<li className='standing__rank'>
			<img
				className='standing__avatar'
				src={info.avatar}
				alt='user avatar'
			/>
			<div className='standing__info'>
				<h4 className='h4 standing__name'>{info.name}</h4>
				<p className='standing__stats'>{`${info.score}/30 - ${
					info.time
				}`}</p>
			</div>
		</li>
	);
}

ExamRank.propTypes = {
	info: examRankProps.isRequired,
};

function createStanding(getRank) {
	const Standing = ({ className, title, standing }) => (
		<section className={className}>
			<h3 className='h3 mb-sm'>{title}</h3>
			<ul className='standing'>
				{standing.map((u, index) => (
					<React.Fragment key={u.name}>
						{getRank(u)}
						{index !== standing.length - 1 ? (
							<div className='line' />
						) : null}
					</React.Fragment>
				))}
			</ul>
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
