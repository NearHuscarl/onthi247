import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { courseProps } from '../utilities/proptypes';
import Tag, { TagGroup } from './Tag';
import { H4 } from './Headings';
import { Bold, Line, SizedBox } from './Common';
import StarRating from './StarRating';
import styled, { appColors, theme, mixins } from '../styles';

const List = styled.section`
	& > :not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const ListItem = styled.article`
	display: grid;
	grid-template-columns: min-content minmax(20rem, 1fr);
	grid-template-rows: repeat(7, min-content);
	column-gap: 2.1rem;

	position: relative;

	img {
		width: 18.9rem;
		border-radius: ${theme.borderRound};
		grid-row: 1 / -1;
	}

	h4 {
		margin-bottom: 0;
		transition: color 0.15s;
		color: ${appColors.blue};

		&:hover {
			color: ${mixins.lighten(appColors.blue)};
		}
	}
`;
const Description = styled.div`
	font-size: 1.3rem;
`;
const Rating = styled.div`
	color: ${appColors.greyDark1};
	font-size: 1.2rem;
	display: flex;
	align-items: center;
`;
const Stats = styled.div`
	font-size: 1.2rem;
`;
const Price = styled(Bold)`
	color: ${appColors.red};
	margin-right: 1rem;
`;

export default function CourseList({ courses }) {
	return (
		<List>
			{courses.map((c, index) => {
				const key = c.id + index;
				return (<React.Fragment key={key}>
					<ListItem>
						<img src={c.image} alt='course preview' />
						<Link to='/course/001/preview'>
							<H4>{c.title}</H4>
						</Link>
						<Bold>{`Môn ${c.subject}`}</Bold>
						<Description>{c.description}</Description>
						<Rating>
							<StarRating score={c.rating} maxScore={5} />
							<SizedBox width={1} />
							<span>{`${c.rating}/5 (${c.ratingCount} lượt đánh giá)`}</span>
						</Rating>
						<Stats>
							<span>Học phí: </span>
							<Price as='span'>{`${c.price.toLocaleString()}đ`}</Price>
							<strike>{`${c.originalPrice.toLocaleString()}đ`}</strike>
						</Stats>
						<Stats>
							<span>Phát hành: </span>
							<Bold as='span'>{c.publishDate}</Bold>
							<span> - Lượt đăng ký học: </span>
							<Bold as='span'>{c.students.toLocaleString()}</Bold>
						</Stats>
						<TagGroup>
							{c.tags.map((t) => (<Tag key={t}>{t}</Tag>))}
						</TagGroup>
					</ListItem>
					{index !== courses.length - 1 ? <Line /> : null}
				</React.Fragment>);
			})}
		</List>
	);
}

CourseList.propTypes = {
	courses: PropTypes.arrayOf(courseProps).isRequired,
};
