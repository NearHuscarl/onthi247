import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { teacherProps } from '../utilities/proptypes';
import { Link, Bold } from './Common';
import styled, { appColors } from '../styles';
import { H4 } from './Headings';
import Button from './Buttons';
import routes from '../routes';

const Item = styled.li`
	display: flex;
	flex-direction: column;
	max-width: 20rem;

	img {
		width: 20rem;
		height: 20rem;
		object-fit: cover;
		margin-bottom: 1.3rem;
	}

	h4 {
		margin-bottom: 0;
	}

	.school {
		font-size: 1.3rem;
		margin-bottom: 0.8rem;
	}

	.info {
		font-size: 1.2rem;
		.highlight {
			color: ${appColors.red};
		}
	}

	.summary {
		font-size: 1.3rem;
		margin: 1.3rem 0;
		line-height: 1.7rem;
	}

	button {
		padding: 1rem 0;
	}
`;

function GridItem({ teacher }) {
	const history = useHistory();
	const path = `${routes.teacher.path}/001`;
	return (
		<Item>
			<img src={teacher.image} alt='teacher' />
			<H4>
				<Link to={path}>{`Cô: ${teacher.name}`}</Link>
			</H4>
			<Bold className='school'>{teacher.school}</Bold>
			<div className='info'>
				<span>Môn: </span>
				<Bold as='span' className='highlight'>
					{teacher.subject}
				</Bold>
				<span> - Số năm KN: </span>
				<Bold as='span' className='highlight'>
					{teacher.experience}
				</Bold>
			</div>
			<div className='summary'>{teacher.summary}</div>
			<Button type='button' onClick={() => history.push(path)}>
				Xem chi tiết
			</Button>
		</Item>
	);
}

GridItem.propTypes = {
	teacher: teacherProps.isRequired,
};

const Grid = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
	justify-items: center;
	row-gap: 4rem;
`;

export default function TeacherGrid({ list }) {
	return (
		<Grid>
			{list.map((t) => (
				<GridItem teacher={t} />
			))}
		</Grid>
	);
}

TeacherGrid.propTypes = {
	list: PropTypes.arrayOf(teacherProps).isRequired,
};
