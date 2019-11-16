import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import ExamCard from './ExamCard';
import exam1 from '../../public/images/exam-preview-01.png';
import exam2 from '../../public/images/exam-preview-02.png';

export default function ExamCardList({ title }) {
	return (
		<section>
			<h3 className='h3 mb-sm'>{title}</h3>
			<div className='card-list'>
				{range(4).map((i) => (
					<ExamCard
						key={i}
						image={i % 2 ? exam1 : exam2}
						title='Tổng ôn tập thi THPT QG 2020 môn Địa lý'
						description='30 câu hỏi - Trình độ cơ bản'
						date='31/10/2019'
					/>
				))}
			</div>
		</section>
	);
}

ExamCardList.propTypes = {
	title: PropTypes.string.isRequired,
};
