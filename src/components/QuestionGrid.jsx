import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import Card from './Card';

export default function QuestionGrid({ questionCount }) {
	return (
		<Card className='question-grid'>
			{range(1, questionCount + 1).map((i) => (
				<button key={i} type='button' className='btn btn--white'>
					{i}
				</button>
			))}
			<button className='btn bold question-grid__btn' type='button'>
				Làm lại bài tập
			</button>
		</Card>
	);
}

QuestionGrid.propTypes = {
	questionCount: PropTypes.number.isRequired,
};
