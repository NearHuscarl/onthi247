import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from './Headings';
import Pagination from './Pagination';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';
import { courseReviewProps } from '../utilities/proptypes';
import styled, { appColors, theme } from '../styles';
import { SearchBar } from './Input';
import { SizedBox } from './Common';

const ReviewBarContainer = styled.div`
	display: grid;
	grid-template-columns: minmax(min-content, 45rem) max-content 3rem;
	column-gap: 1rem;
	align-items: center;
`;
const RatioBar = styled.div`
	flex: 1;
	position: relative;
	height: 2rem;
	background-color: ${appColors.greyLight1};
	border-radius: ${theme.borderRound};

	& > * {
		z-index: 1;
		position: relative;

		font-size: 1.1rem;
		color: ${appColors.white};
		text-shadow: 0 0 1px 1px ${appColors.greyDark3};
		text-shadow: 0 1px 1px ${appColors.greyDark3};

		margin-left: 1rem;
		display: flex;
		align-items: center;
		height: 100%;
	}

	&::before {
		content: '';
		position: absolute;
		width: ${(props) => props.percent}%;
		height: 100%;
		background-color: #a1a7b3;
		border-radius: inherit;
	}
`;
const Percent = styled.div`
	color: ${appColors.udemyBlue};
	font-size: 1.1rem;
`;

function ReviewBar({ percent, totalReview, star }) {
	return (
		<ReviewBarContainer>
			<RatioBar percent={percent * 100}>
				<div>{`${Math.round(
					totalReview * percent,
				).toLocaleString()} lượt đánh giá`}</div>
			</RatioBar>
			<StarRating score={star} maxScore={5} />
			<Percent>{`${(percent * 100).toFixed(0)}%`}</Percent>
		</ReviewBarContainer>
	);
}

ReviewBar.propTypes = {
	percent: PropTypes.number.isRequired,
	totalReview: PropTypes.number.isRequired,
	star: PropTypes.number.isRequired,
};

const Summary = styled.div`
	display: flex;
`;
const Score = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 0 1rem;
	margin-right: 3rem;

	& > :not(:last-child) {
		margin-bottom: 0.75rem;
	}
`;
const ScoreNumber = styled.div`
	font-size: 7.2rem;
	font-weight: 600;
	line-height: 1;
`;
const Stats = styled.div`
	flex: 1;

	& > :not(:last-child) {
		margin-bottom: 1rem;
	}
`;
const Search = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 3rem;
	margin-bottom: 1.5rem;
`;

export default function CourseReviewSection({ review }) {
	const { totalReview } = review;
	return (
		<>
			<H2>Đánh giá của người học</H2>
			<Summary>
				<Score>
					<ScoreNumber>{review.rating}</ScoreNumber>
					<StarRating score={review.rating} maxScore={5} />
					<div>Đánh giá</div>
				</Score>
				<Stats>
					<ReviewBar
						star={1}
						percent={review.ratio.one}
						totalReview={totalReview}
					/>
					<ReviewBar
						star={2}
						percent={review.ratio.two}
						totalReview={totalReview}
					/>
					<ReviewBar
						star={3}
						percent={review.ratio.three}
						totalReview={totalReview}
					/>
					<ReviewBar
						star={4}
						percent={review.ratio.four}
						totalReview={totalReview}
					/>
					<ReviewBar
						star={5}
						percent={review.ratio.five}
						totalReview={totalReview}
					/>
				</Stats>
			</Summary>
			<Search>
				<H2>Các ý kiến đánh giá</H2>
				<SearchBar placeholder='Tìm ý kiến đánh giá...' width={35} />
			</Search>
			{review.reviews.map((r, i) => {
				const key = i;
				return (
					<React.Fragment key={key}>
						<ReviewCard review={r} />
						{i !== review.reviews.length - 1 && (
							<SizedBox height={1.75} />
						)}
					</React.Fragment>
				);
			})}
			<SizedBox height={2.5} />
			<Pagination />
		</>
	);
}

CourseReviewSection.propTypes = {
	review: courseReviewProps.isRequired,
};
