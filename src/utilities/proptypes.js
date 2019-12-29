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

const exerciseProps = PropTypes.shape({
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	publishDate: PropTypes.string.isRequired,
	views: PropTypes.number.isRequired,
	downloads: PropTypes.number.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
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

const userProps = PropTypes.shape({
	name: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
	avatar: PropTypes.string.isRequired,
});

const questionProps = PropTypes.shape({
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	date: PropTypes.string.isRequired,
	votes: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	answers: PropTypes.number.isRequired,
	acceptedAnswer: PropTypes.bool.isRequired,
	user: userProps.isRequired,
});

export {
	examQuestionProps,
	examProps,
	answerProps,
	commentProps,
	rankProps,
	examRankProps,
	userProps,
	questionProps,
	exerciseProps,
};
