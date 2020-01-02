import React from 'react';
import Card from './Card';
import { Bold, SizedBox } from './Common';
import StarRating from './StarRating';
import styled from '../styles';
import { courseUserReviewProps } from '../utilities/proptypes';

const Profile = styled.li`
	display: grid;
	grid-template-columns: min-content max-content 1fr;
	column-gap: 1.6rem;

	img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
	}

	& > :last-child {
		margin-left: 2rem;
	}
`;

export default function ReviewCard({ review }) {
	return (
		<Card>
			<Profile>
				<img src={review.avatar} alt='user avatar' />
				<div>
					<Bold>{review.name}</Bold>
					<div>{review.date}</div>
				</div>
				<div>
					<StarRating score={review.rating} maxScore={5} />
					<SizedBox height={.5} />
					<div>{review.review}</div>
				</div>
			</Profile>
		</Card>
	);
}

ReviewCard.propTypes = {
	review: courseUserReviewProps.isRequired,
};

const FeatureProfile = styled.li`
	display: flex;
	margin-bottom: 1rem;

	img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		margin-right: 1.5rem;
	}
`;
const FeatureProfileText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > :not(:last-child) {
		margin-bottom: 0.25rem;
	}
`;

export function FeatureReviewCard({ review }) {
	return (
		<Card>
			<FeatureProfile>
				<img src={review.avatar} alt='user avatar' />
				<FeatureProfileText>
					<Bold>{review.name}</Bold>
					<StarRating score={review.rating} maxScore={5} />
					<div>{review.date}</div>
				</FeatureProfileText>
			</FeatureProfile>
			<div>{review.review}</div>
		</Card>
	);
}

FeatureReviewCard.propTypes = {
	review: courseUserReviewProps.isRequired,
};
