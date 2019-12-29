import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { examProps } from '../utilities/proptypes';
import { Line, Bold } from './Common';
import { ButtonText } from './Buttons';
import { H4 } from './Headings';
import styled, { appColors, theme } from '../styles';

const List = styled.section`
	& > :not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const ListItem = styled.article`
	display: grid;
	grid-template-columns: min-content minmax(20rem, 1fr);
	grid-template-rows: repeat(4, min-content);
	column-gap: 2.1rem;

	position: relative;

	img {
		width: 18.9rem;
		height: 11rem;
		border-radius: ${theme.borderRound};
		grid-row: 1 / -1;
	}

	h4 {
		transition: color 0.15s;

		&:hover {
			color: ${appColors.primary};
		}
	}
`;
const Description = styled.div`
	font-size: 1.2rem;
`;
const Stats = styled.div`
	font-size: 1.1rem;
`;
const More = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

export default function ExamPreviewList({ exams }) {
	return (
		<List>
			{exams.map((e, index) => (
				<React.Fragment key={e.id}>
					<ListItem>
						<img src={e.image} alt='exam preview' />
						<Link to={`/exams/${e.id}/preview`}>
							<H4>{e.title}</H4>
						</Link>
						<Bold>
							{`Môn ${e.subject} - ${e.questionCount} câu hỏi - Trình độ ${e.difficulty}`}
						</Bold>
						<Description>{e.description}</Description>
						<Stats>
							{`Phát hành: ${
								e.publish
							} - Lượt xem: ${e.views.toLocaleString()} - Lượt làm bài: ${e.attempts.toLocaleString()}`}
						</Stats>
						<More>
							<ButtonText type='button'>
								<FontAwesomeIcon icon={faEllipsisH} />
							</ButtonText>
						</More>
					</ListItem>
					{index !== exams.length - 1 ? <Line /> : null}
				</React.Fragment>
			))}
		</List>
	);
}

ExamPreviewList.propTypes = {
	exams: PropTypes.arrayOf(examProps).isRequired,
};
