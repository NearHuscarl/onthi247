import React from 'react';
import { faPlay, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { exerciseProps } from '../utilities/proptypes';
import { YellowButton, OpaqueButton } from './Buttons';
import { H2 } from './Headings';
import styled, { theme, helperStyles } from '../styles';
import { Bold } from './Common';

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
	return (
		<Container>
			<img src={exercise.image} alt='exercise preview' />
			<H2>{exercise.title}</H2>
			<Bold>{`Môn ${exercise.subject}`}</Bold>
			<Stats>
				<span>Phát hành: </span>
				<Bold as='span'>{exercise.publishDate} </Bold>
				<span> - Lượt xem: </span>
				<Bold as='span'>{exercise.views.toLocaleString()}</Bold>
				<span> - Lượt tải: </span>
				<Bold as='span'>{exercise.downloads.toLocaleString()}</Bold>
			</Stats>
			<div>
				<YellowButton type='button'>
					<FontAwesomeIcon icon={faPlay} />
					<span>Xem trực tuyến</span>
				</YellowButton>
				<OpaqueButton type='button'>
					<FontAwesomeIcon icon={faDownload} />
					<span>Tải tài liệu</span>
				</OpaqueButton>
			</div>
		</Container>
	);
}

ExercisePreviewSection.propTypes = {
	exercise: exerciseProps.isRequired,
};
