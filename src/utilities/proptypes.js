import PropTypes from 'prop-types';

const examQuestionProps = PropTypes.shape({
	question: PropTypes.string,
	answers: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			percentage: PropTypes.number,
		}),
	),
	answerDetail: PropTypes.string,
});

const answerProps = PropTypes.shape({
	text: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
});

const commentProps = PropTypes.shape({
	avatar: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
});

export { examQuestionProps, answerProps, commentProps };
