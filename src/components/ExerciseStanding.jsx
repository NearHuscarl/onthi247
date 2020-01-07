import React from 'react';
import PropTypes from 'prop-types';
import { Bold, Link } from './Common';
import { rankProps } from '../utilities/proptypes';
import styled, { appColors } from '../styles';
import routes from '../routes';

const List = styled.ul`
	display: grid;
	row-gap: 1rem;
`;
const ListItem = styled.li`
	display: grid;
	grid-template-columns:
		4rem minmax(10rem, 12.5rem) minmax(10rem, max-content)
		minmax(14rem, 17rem) minmax(7.5rem, 11rem) 8rem 9rem;
	column-gap: 4.5rem;
	align-items: center;
	padding: 1rem .5rem;

	:nth-child(odd) {
		background-color: ${appColors.greyLight0};
	}

	.rank {
		text-align: center;
	}

	img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin-right: 0.8rem;
		box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
	}

	.profile {
		display: flex;
		&__name {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
`;
const Header = styled(ListItem)`
	margin-bottom: 1.3rem;

	:nth-child(odd) {
		background-color: ${appColors.white};
	}
`;
const Small = styled.div`
	font-size: 1.2rem;
`;

export function Rank({ info }) {
	return (
		<ListItem>
			<div className='rank'>{info.rank}</div>
			<div className='profile'>
				<img src={info.avatar} alt='user avatar' />
				<div className='profile__name'>
					<Link to={`${routes.profile.path}/${info.id}`}>{info.id}</Link>
					<Small>{`Level: ${info.level}`}</Small>
				</div>
			</div>
			<Small>{info.name}</Small>
			<Small>{info.school}</Small>
			<Small>{info.province}</Small>
			<Small>{info.score}</Small>
			<Small>{info.time}</Small>
		</ListItem>
	);
}

Rank.propTypes = {
	info: rankProps.isRequired,
};

export default function ExerciseStanding({ className, list }) {
	return (
		<>
			<Header>
				<Bold>Vị thứ</Bold>
				<Bold>Tài khoản</Bold>
				<Bold>Họ và tên</Bold>
				<Bold>Trường</Bold>
				<Bold>Tỉnh/Thành phố</Bold>
				<Bold>Số câu đúng</Bold>
				<Bold>Thời gian</Bold>
			</Header>
			<List className={className}>
				{list.map((u) => (
					<Rank key={u.name} info={u} />
				))}
			</List>
		</>
	);
}

ExerciseStanding.propTypes = {
	className: PropTypes.string,
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
ExerciseStanding.defaultProps = {
	className: null,
};
