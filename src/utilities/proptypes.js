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

const courseProps = PropTypes.shape({
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	teacher: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	ratingCount: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	hasBought: PropTypes.bool.isRequired,
	originalPrice: PropTypes.number.isRequired,
	publishDate: PropTypes.string.isRequired,
	students: PropTypes.number.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
});

const courseSummary = PropTypes.arrayOf(
	PropTypes.shape({
		title: PropTypes.string.isRequired,
		length: PropTypes.string.isRequired,
		videos: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				length: PropTypes.string.isRequired,
				preview: PropTypes.bool.isRequired,
			}),
		),
	}),
);
const courseDetailProps = PropTypes.shape({
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired,
	teacher: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	ratingCount: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	originalPrice: PropTypes.number.isRequired,
	publishDate: PropTypes.string.isRequired,
	students: PropTypes.number.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),

	lastUpdate: PropTypes.string.isRequired,
	totalVideo: PropTypes.number.isRequired,
	videoLength: PropTypes.string.isRequired,
	summary: courseSummary.isRequired,
	features: PropTypes.arrayOf(PropTypes.string),
	requirements: PropTypes.arrayOf(PropTypes.string),
	courseDescription: PropTypes.string.isRequired,
});

const teacherProps = PropTypes.shape({
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	bio: PropTypes.arrayOf(PropTypes.string),
	description: PropTypes.string.isRequired,
});

const courseUserReviewProps = PropTypes.shape({
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
	review: PropTypes.string.isRequired,
});

const courseReviewProps = PropTypes.shape({
	rating: PropTypes.number.isRequired,
	totalReview: PropTypes.number.isRequired,
	ratio: PropTypes.shape({
		one:PropTypes.number.isRequired,
		two:PropTypes.number.isRequired,
		three: PropTypes.number.isRequired,
		four: PropTypes.number.isRequired,
		five: PropTypes.number.isRequired,
	}),
	reviews: PropTypes.arrayOf(courseUserReviewProps),
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
	rank: PropTypes.number.isRequired,
	avatar: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
	school: PropTypes.string.isRequired,
	province: PropTypes.string.isRequired,
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
	school: PropTypes.string.isRequired,
	province: PropTypes.string.isRequired,
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
	courseProps,
	courseDetailProps,
	courseSummary,
	teacherProps,
	courseReviewProps,
	courseUserReviewProps,
};
