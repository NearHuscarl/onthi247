import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { examProps } from '../utilities/proptypes';
import Line from './Line';

export default function ExamPreviewList({ exams }) {
	return (
		<section className='exam-preview-list'>
			{exams.map((e, index) => (
				<React.Fragment key={e.id}>
					<article className='exam-preview-item'>
						<img
							src={e.image}
							className='exam-preview-item__img'
							alt='exam preview'
						/>
						<Link to={`/exams/${e.id}/preview`}>
							<h4 className='exam-preview-item__title h4'>{e.title}</h4>
						</Link>
						<div className='exam-preview-item__info'>
							{`Môn ${e.subject} - ${e.questionCount} câu hỏi - Trình độ ${e.difficulty}`}
						</div>
						<div className='exam-preview-item__desc'>{e.description}</div>
						<div className='exam-preview-item__stats'>
							{`Phát hành: ${
								e.publish
							} - Lượt xem: ${e.views.toLocaleString()} - Lượt làm bài: ${e.attempts.toLocaleString()}`}
						</div>
						<div className='exam-preview-item__more'>
							<button type='button' className='btn-text'>
								<FontAwesomeIcon icon={faEllipsisH} />
							</button>
						</div>
					</article>
					{index !== exams.length - 1 ? <Line /> : null}
				</React.Fragment>
			))}
		</section>
	);
}

ExamPreviewList.propTypes = {
	exams: PropTypes.arrayOf(examProps).isRequired,
};
