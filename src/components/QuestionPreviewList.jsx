import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from './Chip';
import Line from './Line';
import { questionProps } from '../utilities/proptypes';
import timeSince from '../utilities/timeSince';
import { helperStyles } from '../constants';

const ListItem = styled.article`
	display: flex;
	position: relative;

	h3 {
		color: #005999;
	}
`;
const Side = styled.div`
	text-align: center;
	flex: 0 0 7rem;
	margin-right: 1.9rem;
`;
const SideNumber = styled.div`
	font-size: 1.6rem;
`;
const SideText = styled.div`
	font-size: 1rem;
`;
const SideSubtext = styled.div`
	font-size: 0.8rem;
`;

const Subject = styled.div`
	font-weight: 600;
	${helperStyles.marginBottomTiny}
`;
const Description = styled.div`
	${helperStyles.marginBottomSmall}
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TagGroup = styled.div`
	display: flex;
	align-items: flex-start;

	& > :not(:last-child) {
		margin-right: 0.7rem;
	}
`;
const User = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
	column-gap: 0.7rem;

	width: 12rem;

	& > :first-child {
		grid-column: 1 / -1;
		font-size: 0.9rem;
	}

	img {
		grid-row: 2 / 4;

		margin-top: 0.58rem;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.2);
	}

	.name {
		margin-top: 0.58rem;
		font-size: 1rem;
		font-weight: 600;
	}

	.level {
		font-size: 1rem;
	}
`;

const More = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

function QuestionPreviewListItem({ question }) {
	const q = question;
	return (
		<ListItem>
			<Side>
				<SideNumber>{q.votes.toLocaleString()}</SideNumber>
				<SideText>bình chọn</SideText>
				<SideNumber>{q.answers}</SideNumber>
				<SideText>câu trả lời</SideText>
				<SideSubtext>{`${q.views.toLocaleString()} lượt xem`}</SideSubtext>
			</Side>
			<div>
				<h3 className='h3'>{q.title}</h3>
				<Subject>{`Môn ${q.subject}`}</Subject>
				<Description>{q.description}</Description>
				<Bottom>
					<TagGroup>
						{q.tags.map((t) => (
							<Chip key={t}>{t}</Chip>
						))}
					</TagGroup>
					<User>
						<div>{`đã hỏi cách đây ${timeSince(new Date(q.date))}`}</div>
						<img src={q.user.avatar} alt='user profile' />
						<div className='name'>{q.user.name}</div>
						<div className='level'>{`Level: ${q.user.level}`}</div>
					</User>
				</Bottom>
			</div>
			<More>
				<button type='button' className='btn-text'>
					<FontAwesomeIcon icon={faEllipsisH} />
				</button>
			</More>
		</ListItem>
	);
}

QuestionPreviewListItem.propTypes = {
	question: questionProps.isRequired,
};

export default function QuestionPreviewList({ questions }) {
	return (
		<section>
			{questions.map((q, index) => {
				return (
					<React.Fragment key={q.id}>
						<QuestionPreviewListItem question={q} />
						{index !== questions.length - 1 ? <Line medium /> : null}
					</React.Fragment>
				);
			})}
		</section>
	);
}

QuestionPreviewList.propTypes = {
	questions: PropTypes.arrayOf(questionProps).isRequired,
};
