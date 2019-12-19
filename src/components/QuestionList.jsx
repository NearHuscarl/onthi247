import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { questionProps } from '../utilities/proptypes';
import { appColors } from '../constants';

const List = styled.ul`
	& > :not(:last-child) {
		margin-bottom: 0.8rem;
	}
`;
const ListItem = styled.li`
	display: grid;
	grid-template-columns: max-content 1fr;
	grid-template-rows: repeat(2, min-content);
	align-items: flex-start;
	column-gap: 0.9rem;
`;
const Score = styled.div`
	grid-row: 1 / -1;

	background-color: ${(props) => (props.accepted ? '#5fba7d' : '#eff0f1')};
	color: ${(props) => (props.accepted ? appColors.white : 'inherit')};
	border-radius: 0.2rem;
	width: 2.8rem;
	padding: 0.2rem 0;

	font-size: 0.9rem;
	text-align: center;
`;
const Title = styled.div`
	color: #005999;
`;
const Small = styled.div`
	font-size: 1rem;
`;

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
			<List>
				{questions.map((q) => (
					<ListItem key={q.id}>
						<Score accepted={q.acceptedAnswer}>{q.votes}</Score>
						<Title>{q.title}</Title>
						<Small>{formatISOString(q.date)}</Small>
					</ListItem>
				))}
			</List>
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
