import React from 'react';
import { useHistory } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { exerciseProps } from '../utilities/proptypes';
import Button, { WhiteButton } from './Buttons';
import { H2 } from './Headings';
import styled, { theme, helperStyles } from '../styles';
import routes from '../routes';

const Container = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
	grid-template-rows: repeat(4, min-content);

	img {
		width: 20.5rem;
		height: 12rem;
		border-radius: ${theme.borderRound};
		margin-right: 2.1rem;
		grid-row: 1 / -1;
	}

	h2 {
		margin-bottom: 0.4rem;
	}

	h2 + div {
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	button:first-child {
		${helperStyles.marginRightSmall}
		${helperStyles.bold}
	}
`;
const Stats = styled.div`
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
`;

export default function ExercisePreviewSection({ exercise }) {
	const history = useHistory();
	const exercisePath = `${routes.exercise.path}/${exercise.id}/questions`;

	return (
		<Container>
			<img src={exercise.image} alt='exercise preview' />
			<H2>{exercise.title}</H2>
			<div>{`${exercise.questionCount} câu hỏi - Trình độ ${exercise.difficulty}`}</div>
			<Stats>
				{`Phát hành: ${
					exercise.publish
				} - Lượt xem: ${exercise.views.toLocaleString()} - Lượt làm bài: ${exercise.attempts.toLocaleString()}`}
			</Stats>
			<div>
				<Button type='button' onClick={() => history.push(exercisePath)}>
					<FontAwesomeIcon icon={faPlay} />
					<span>Bắt đầu làm bài</span>
				</Button>
				<WhiteButton type='button'>
					<FontAwesomeIcon icon={faHeart} />
					<span>Lưu vào danh sách yêu thích</span>
				</WhiteButton>
			</div>
		</Container>
	);
}

ExercisePreviewSection.propTypes = {
	exercise: exerciseProps.isRequired,
};
