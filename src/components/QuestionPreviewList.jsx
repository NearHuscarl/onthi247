import React from 'react';
import PropTypes from 'prop-types';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from './Chip';
import { questionProps } from '../utilities/proptypes';
import timeSince from '../utilities/timeSince';

function QuestionPreviewListItem({ question }) {
	const q = question;
	return (
		<article className='qs-preview-item'>
			<div className='qs-preview-item__side'>
				<div className='qs-preview-item__side__number'>
					{q.votes.toLocaleString()}
				</div>
				<div className='qs-preview-item__side__text'>bình chọn</div>
				<div className='qs-preview-item__side__number'>{q.answers}</div>
				<div className='qs-preview-item__side__text'>câu trả lời</div>
				<div className='qs-preview-item__side__subtext'>{`${q.views.toLocaleString()} lượt xem`}</div>
			</div>
			<div className='qs-preview-item__content'>
				<h3 className='qs-preview-item__title h3'>{q.title}</h3>
				<div className='qs-preview-item__subject mb-tn'>{`Môn ${q.subject}`}</div>
				<div className='qs-preview-item__desc mb-sm'>{q.description}</div>
				<div className='qs-preview-item__bottom'>
					<div className='qs-preview-item__tags'>
						{q.tags.map((t) => (
							<Chip key={t}>{t}</Chip>
						))}
					</div>
					<div className='qs-preview-item__user'>
						<div className='qs-preview-item__date'>
							{`đã hỏi cách đây ${timeSince(new Date(q.date))}`}
						</div>
						<img
							className='qs-preview-item__user-avatar'
							src={q.user.avatar}
							alt='user profile'
						/>
						<div className='qs-preview-item__user-name'>
							{q.user.name}
						</div>
						<div className='qs-preview-item__user-level'>
							{`Level: ${q.user.level}`}
						</div>
					</div>
				</div>
			</div>
			<div className='qs-preview-item__more'>
				<button type='button' className='btn-text'>
					<FontAwesomeIcon icon={faEllipsisH} />
				</button>
			</div>
		</article>
	);
}

QuestionPreviewListItem.propTypes = {
	question: questionProps.isRequired,
};

export default function QuestionPreviewList({ questions }) {
	return (
		<section className='qs-preview-list'>
			{questions.map((q, index) => {
				return (
					<React.Fragment key={q.id}>
						<QuestionPreviewListItem question={q} />
						{index !== questions.length - 1 ? (
							<div className='line' />
						) : null}
					</React.Fragment>
				);
			})}
		</section>
	);
}

QuestionPreviewList.propTypes = {
	questions: PropTypes.arrayOf(questionProps).isRequired,
};
