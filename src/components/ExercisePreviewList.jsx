import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { exerciseProps } from '../utilities/proptypes';
import Line from './Line';
import Tag, { TagGroup } from './Tag';
import { ButtonText } from './Buttons';
import { H4 } from './Headings';
import { Bold } from './Common';
import styled, { appColors, theme, mixins } from '../styles';

const List = styled.section`
	& > :not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const ListItem = styled.article`
	display: grid;
	grid-template-columns: min-content minmax(20rem, 1fr);
	grid-template-rows: repeat(5, min-content);
	column-gap: 2.1rem;
	row-gap: .35rem;

	position: relative;

	h4 {
		margin-bottom: 0;
	}

	img {
		width: 18.9rem;
		height: 11rem;
		border-radius: ${theme.borderRound};
		grid-row: 1 / -1;
	}

	h4 {
		transition: color 0.15s;
		color: ${appColors.blue};

		&:hover {
			color: ${mixins.lighten(appColors.blue)};
		}
	}
`;
const Info = styled.div`
	font-weight: 600;
`;
const Description = styled.div`
	font-size: 1.3rem;
`;
const Stats = styled.div`
	font-size: 1.2rem;
`;
const More = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`;

export default function ExercisePreviewList({ exercises }) {
	return (
		<List>
			{exercises.map((e, index) => (
				<React.Fragment key={e.id}>
					<ListItem>
						<img src={e.image} alt='exam preview' />
						<Link to={`/exams/${e.id}/preview`}>
							<H4>{e.title}</H4>
						</Link>
						<Info>{`Môn ${e.subject}`}</Info>
						<Description>{e.description}</Description>
						<Stats>
							<span>Phát hành: </span>
							<Bold as='span'>{e.publishDate} </Bold>
							<span> - Lượt xem: </span>
							<Bold as='span'>{e.views.toLocaleString()}</Bold>
							<span> - Lượt tải: </span>
							<Bold as='span'>{e.downloads.toLocaleString()}</Bold>
						</Stats>
						<TagGroup>
							{e.tags.map((t) => (
								<Tag key={t}>{t}</Tag>
							))}
						</TagGroup>
						<More>
							<ButtonText type='button'>
								<FontAwesomeIcon icon={faEllipsisH} />
							</ButtonText>
						</More>
					</ListItem>
					{index !== exercises.length - 1 ? <Line /> : null}
				</React.Fragment>
			))}
		</List>
	);
}

ExercisePreviewList.propTypes = {
	exercises: PropTypes.arrayOf(exerciseProps).isRequired,
};
