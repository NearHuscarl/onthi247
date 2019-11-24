import React from 'react';
import PropTypes from 'prop-types';
import { examProps } from '../utilities/proptypes';

export default function ExamPreviewList({ exams }) {
	return (
		<section className='exam-preview-list'>
			{exams.map((e, index) => (
				<React.Fragment>
					<article className='exam-preview'>
						<img
							src={e.image}
							className='exam-preview__img'
							alt='exam preview'
						/>
						<h4 className='exam-preview__title h4'>{e.title}</h4>
						<div className='exam-preview__info'>
							{`Môn ${e.subject} - ${
								e.questionCount
							} câu hỏi - Trình độ ${e.difficulty}`}
						</div>
						<div className='exam-preview__desc'>{e.description}</div>
						<div className='exam-preview__stats'>
							{`Phát hành: ${e.publish} - Lượt xem: ${
								e.views
							} - Lượt làm bài: ${e.attempts}`}
						</div>
					</article>
					{index !== exams.length - 1 ? <div className='line' /> : null}
				</React.Fragment>
			))}
		</section>
	);
}

ExamPreviewList.propTypes = {
	exams: PropTypes.arrayOf(examProps).isRequired,
};
