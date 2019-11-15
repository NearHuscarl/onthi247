/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from './Card';
import profile from '../../public/images/profile.png';
import profile2 from '../../public/images/profile-bitchin.jpg';

const commentLabel = 'Nhập nội dung bình luận...';
const comments = [
	{
		avatar: profile,
		user: 'bé dủng',
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		isReply: false,
	},
	{
		avatar: profile2,
		user: 'bé bi',
		date: '31 phút trước',
		content: 'Lời giải không hết sức thuyết phục',
		isReply: true,
	},
];

function Comment({ comment }) {
	const { avatar, user, date, content, isReply } = comment;
	return (
		<div className='comment-wrapper'>
			{isReply && <div className='comment-padding' />}
			<Card className='card--white comment'>
				<img className='comment__profile' src={avatar} alt='user avatar' />
				<div className='comment__detail'>
					<div className='comment__top'>
						<div className='comment__user'>{user}</div>
						<div className='comment__date'>{date}</div>
					</div>
					<div className='comment__content'>{content}</div>
					<div className='comment__action'>
						<button type='button' className='btn-text'>
							Thích
						</button>
						<button type='button' className='btn-text'>
							Trả lời
						</button>
					</div>
				</div>
			</Card>
		</div>
	);
}

Comment.propTypes = {
	comment: PropTypes.shape({
		avatar: PropTypes.string,
		user: PropTypes.string,
		date: PropTypes.string,
		content: PropTypes.string,
	}).isRequired,
};

const options = [
	{ value: 'most_related', label: 'Phù hợp nhất' },
	{ value: 'newest', label: 'Mới nhất' },
];

export default function CommentSection() {
	const [filter, setFilter] = useState(0);

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
				<h3 className='h3'>{`${comments.length} bình luận`}</h3>
				<Select
					className='comment-section__filter'
					value={filter || options[0]}
					onChange={(selectedValue) => setFilter(() => selectedValue)}
					options={options}
				/>
			</div>
			<div className='comment-container'>
				{comments.map((c) => (
					<Comment key={c.user + c.date} comment={c} />
				))}
			</div>
		</Card>
	);
}
