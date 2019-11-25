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

const examProps = PropTypes.shape({
	title: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	questionCount: PropTypes.number.isRequired,
	difficulty: PropTypes.string.isRequired,
	questions: PropTypes.arrayOf(examQuestionProps),
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

const rankProps = PropTypes.shape({
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
});

const examRankProps = PropTypes.shape({
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	time: PropTypes.string.isRequired,
});

export {
	examQuestionProps,
	examProps,
	answerProps,
	commentProps,
	rankProps,
	examRankProps,
};
