import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { questionProps } from '../utilities/proptypes';

const formatISOString = (iSOString) => {
	const date = new Date(iSOString);
	return (
		date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
	);
};

export default function QuestionList({ className, title, questions }) {
	return (
		<div className={className}>
			<h3 className='h3 mb-sm'>{title}</h3>
			<ul className='qs-list'>
				{questions.map((q) => (
					<li key={q.id} className='qs-item'>
						<div
							className={classNames({
								'qs-item__score': true,
								'qs-item__score--green': q.acceptedAnswer,
							})}
						>
							{q.votes}
						</div>
						<div className='qs-item__title'>{q.title}</div>
						<div className='qs-item__date'>{formatISOString(q.date)}</div>
					</li>
				))}
			</ul>
		</div>
	);
}

QuestionList.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	questions: PropTypes.arrayOf(questionProps).isRequired,
};

QuestionList.defaultProps = {
	className: '',
};
