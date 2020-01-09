import React from 'react';
import PropTypes from 'prop-types';
import { exerciseProps } from '../utilities/proptypes';
import { Link, Line, Bold, EllipsisButton } from './Common';
import { H4 } from './Headings';
import Tag, { TagGroup } from './Tag';
import styled, { theme } from '../styles';
import routes from '../routes';

const List = styled.section`
	& > :not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const ListItem = styled.article`
	display: flex;
	position: relative;

	.content > :not(:last-child) {
		margin-bottom: .5rem;
	}

	h4 {
		margin-bottom: 0;
	}

	img {
		flex: 0 0 auto;
		margin-right: 2rem;
		width: 18.9rem;
		height: 11rem;
		border-radius: ${theme.borderRound};
	}
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

export default function ExerciseList({ list }) {
	return (
		<List>
			{list.map((e, index) => (
				<React.Fragment key={e.id}>
					<ListItem>
						<img src={e.image} alt='exercise preview' />
						<div className='content'>
							<H4>
								<Link to={`${routes.exercise.path}/${e.id}/preview`}>
									{e.title}
								</Link>
							</H4>
							<Description>
								<Bold>
									{`Môn ${e.subject} - ${e.questionCount} câu hỏi - Trình độ ${e.difficulty}`}
								</Bold>
							</Description>
							<Description>{e.description}</Description>
							<Stats>
								<span>Biên soạn: </span>
								<Bold as='span'>{e.teacher} </Bold>
								<span> - Phát hành: </span>
								<Bold as='span'>{e.publish} </Bold>
								<span> - Lượt xem: </span>
								<Bold as='span'>{e.views.toLocaleString()}</Bold>
								<span> - Lượt làm bài: </span>
								<Bold as='span'>{e.attempts.toLocaleString()}</Bold>
							</Stats>
							<TagGroup>
								{e.tags.map((t) => (
									<Tag key={t}>{t}</Tag>
								))}
							</TagGroup>
						</div>
						<More>
							<EllipsisButton />
						</More>
					</ListItem>
					{index !== list.length - 1 ? <Line /> : null}
				</React.Fragment>
			))}
		</List>
	);
}

ExerciseList.propTypes = {
	list: PropTypes.arrayOf(exerciseProps).isRequired,
};
