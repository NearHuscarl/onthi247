import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag, { TagGroup } from './Tag';
import Line from './Line';
import QaProfile from './QaProfile';
import { H3 } from './Headings';
import { ButtonText } from './Buttons';
import { questionProps } from '../utilities/proptypes';
import styled, { appColors, helperStyles, mixins } from '../styles';

const ListItem = styled.article`
	display: flex;
	position: relative;

	h3 {
		color: ${appColors.blue};
		transition: color ease 0.25s;

		&:hover,
		&:active,
		&:focus {
			color: ${mixins.lighten(appColors.blue)};
		}
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

const More = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

function QuestionPreviewListItem({ question }) {
	const {
		votes,
		answers,
		views,
		title,
		subject,
		description,
		tags,
		date,
		user,
	} = question;
	return (
		<ListItem>
			<Side>
				<SideNumber>{votes.toLocaleString()}</SideNumber>
				<SideText>bình chọn</SideText>
				<SideNumber>{answers}</SideNumber>
				<SideText>câu trả lời</SideText>
				<SideSubtext>{`${views.toLocaleString()} lượt xem`}</SideSubtext>
			</Side>
			<div>
				<Link to='/questions/001'>
					<H3>{title}</H3>
				</Link>
				<Subject>{`Môn ${subject}`}</Subject>
				<Description>{description}</Description>
				<Bottom>
					<TagGroup>
						{tags.map((t) => (
							<Tag key={t}>{t}</Tag>
						))}
					</TagGroup>
					<QaProfile user={user} date={date} />
				</Bottom>
			</div>
			<More>
				<ButtonText type='button'>
					<FontAwesomeIcon icon={faEllipsisH} />
				</ButtonText>
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
