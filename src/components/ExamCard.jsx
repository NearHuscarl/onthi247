import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function ExamCard({ image, title, description, date }) {
	return (
		<Card className='card--white card--no-padding exam-card'>
			<img className='exam-card__img' src={image} alt='exam preview' />
			<div className='exam-card__content'>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a href=''>
					<h4 className='h4'>{title}</h4>
				</a>
				<p className='bold'>{description}</p>
				<p className='exam-card__date'>{`Phát hành: ${date}`}</p>
			</div>
		</Card>
	);
}

ExamCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};
