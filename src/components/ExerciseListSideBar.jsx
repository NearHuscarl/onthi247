import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { exerciseProps } from '../utilities/proptypes';
import routes from '../routes';
import styled, { appColors, theme } from '../styles';
import { H3 } from './Headings';
import { SizedBox } from './Common';

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
const Image = styled.img`
	grid-row: 1 / -1;
	width: 6.2rem;
	height: 6.2rem;
	object-fit: cover;
	border-radius: ${theme.borderRound};
`;
const Title = styled.div`
	font-size: 1.2rem;
	color: ${appColors.lightBlue};
`;
const Small = styled.div`
	font-size: 1rem;
`;

export default function ExerciseListSideBar({ className, title, exercises }) {
	return (
		<div className={className}>
			<H3>{title}</H3>
			<SizedBox height={1} />
			<List>
				{exercises.map(({ id, publishDate, title: t, image }, index) => (
					<React.Fragment key={id}>
						<ListItem>
							<Image src={image} alt='exercise preview' />
							<Link to={`${routes.exercise.path}/001`}>
								<Title>{t}</Title>
							</Link>
							<Small>{publishDate}</Small>
						</ListItem>
						{index !== exercises.length - 1 && <SizedBox height={0.5} />}
					</React.Fragment>
				))}
			</List>
		</div>
	);
}

ExerciseListSideBar.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	exercises: PropTypes.arrayOf(exerciseProps).isRequired,
};

ExerciseListSideBar.defaultProps = {
	className: '',
};
