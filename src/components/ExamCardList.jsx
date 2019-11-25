import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ExamCard from './ExamCard';
import { examProps } from '../utilities/proptypes';

function PreviousButton({ className, onClick }) {
	return (
		<div
			className={className + ' arrow-right'}
			aria-hidden='true'
			onClick={onClick}
		/>
	);
}
function NextButton({ className, onClick }) {
	return (
		<div
			className={className + ' arrow-left'}
			aria-hidden='true'
			onClick={onClick}
		/>
	);
}
PreviousButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};
NextButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};
PreviousButton.defaultProps = {
	className: '',
	onClick: null,
};
NextButton.defaultProps = {
	className: '',
	onClick: null,
};

const resonsiveSettings = [
	{
		breakpoint: 860,
		settings: {
			slidesToShow: 3,
		},
	},
	{
		breakpoint: 640,
		settings: {
			draggable: true,
			slidesToShow: 2,
		},
	},
	{
		breakpoint: 430,
		settings: {
			draggable: true,
			slidesToShow: 1,
		},
	},
];

export default function ExamCardList({ title, exams, slidesToShow }) {
	return (
		<section>
			<h3 className='h3 mb-0'>{title}</h3>
			<Slider
				slidesToShow={slidesToShow}
				slidesToScroll={1}
				infinite={false}
				nextArrow={<NextButton />}
				prevArrow={<PreviousButton />}
				draggable={false}
				responsive={resonsiveSettings}
			>
				{exams.map((e) => (
					<ExamCard
						key={e.id}
						image={e.image}
						title={e.title}
						description={`${e.questionCount} câu hỏi - Trình độ ${
							e.difficulty
						}`}
						date={e.publish}
					/>
				))}
			</Slider>
		</section>
	);
}

ExamCardList.propTypes = {
	title: PropTypes.string.isRequired,
	exams: PropTypes.arrayOf(examProps).isRequired,
	slidesToShow: PropTypes.number,
};

ExamCardList.defaultProps = {
	slidesToShow: 4,
};
