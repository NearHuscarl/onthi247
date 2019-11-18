import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import range from 'lodash/range';
import ExamCard from './ExamCard';
import exam1 from '../../public/images/exam-preview-01.png';
import exam2 from '../../public/images/exam-preview-02.png';

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

export default function ExamCardList({ title }) {
	return (
		<section>
			<h3 className='h3 mb-0'>{title}</h3>
			<Slider
				slidesToShow={4}
				slidesToScroll={1}
				infinite={false}
				nextArrow={<NextButton />}
				prevArrow={<PreviousButton />}
				draggable={false}
				responsive={resonsiveSettings}
			>
				{range(12).map((i) => (
					<ExamCard
						key={i}
						image={i % 2 ? exam1 : exam2}
						title='Tổng ôn tập thi THPT QG 2020 môn Địa lý'
						description='30 câu hỏi - Trình độ cơ bản'
						date='31/10/2019'
					/>
				))}
			</Slider>
		</section>
	);
}

ExamCardList.propTypes = {
	title: PropTypes.string.isRequired,
};
