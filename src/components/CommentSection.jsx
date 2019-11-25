/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import Card from './Card';
import { setExamResultComment } from '../actions/examResult';
import { commentProps } from '../utilities/proptypes';

function Comment({ comment, isReply }) {
	const { avatar, user, date, content } = comment;
	return (
		<div className='comment-wrapper'>
			{isReply && <div className='comment-padding' />}
			<Card className='comment' background='white'>
				<img className='comment__profile' src={avatar} alt='user avatar' />
				<div className='comment__detail'>
					<div className='comment__top'>
						<div className='comment__user'>{user}</div>
						<div className='comment__date'>{date}</div>
					</div>
					<div className='comment__content'>{content}</div>
					<div className='comment__action'>
						<button type='button' className='btn-link'>
							Thích
						</button>
						<button type='button' className='btn-link'>
							Trả lời
						</button>
					</div>
				</div>
			</Card>
		</div>
	);
}

Comment.propTypes = {
	comment: commentProps.isRequired,
	isReply: PropTypes.bool.isRequired,
};

const options = [
	{ value: 'most_related', label: 'Phù hợp nhất' },
	{ value: 'newest', label: 'Mới nhất' },
];

function getCommentCount(comments) {
	const commentCount = comments.length;
	const replyCount = comments
		.map((c) => c.replies.length)
		.reduce((a, b) => a + b, 0);

	return commentCount + replyCount;
}

function CommentSection({ comments }) {
	const [filter, setFilter] = useState(options[0]);
	const commentLabel = 'Nhập nội dung bình luận...';

	return (
		<Card className='comment-section'>
			<div className='input-group mb-sm'>
				<textarea
					type='text'
					className='form-control'
					placeholder={commentLabel}
					aria-label={commentLabel}
				/>
			</div>
			<button className='btn comment-section__submit mb-tn' type='button'>
				Bình luận
			</button>
			<div className='comment-section__filters'>
				<h3 className='h3'>{`${getCommentCount(comments)} bình luận`}</h3>
				<Select
					className='comment-section__filter'
					value={filter}
					onChange={(selectedValue) => setFilter(() => selectedValue)}
					options={options}
				/>
			</div>
			<div className='comment-container'>
				{comments.map((c) => {
					const commentComponents = [];

					commentComponents.push(
						<Comment key={c.user + c.date} comment={c} isReply={false} />,
					);

					c.replies.forEach((r) =>
						commentComponents.push(
							<Comment key={r.user + r.date} comment={r} isReply />,
						),
					);

					return commentComponents;
				})}
			</div>
		</Card>
	);
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(commentProps).isRequired,
};

const mapStateToProps = (state) => ({
	comments: state.examResult.comments,
});

const mapDispatchToProps = (dispatch) => ({
	setExamResultComment: (comment) => dispatch(setExamResultComment(comment)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CommentSection);
