import React from 'react';
import PropTypes from 'prop-types';
import {
	faStar,
	faStarHalfAlt as faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { appColors } from '../styles';

const StarIcon = styled(FontAwesomeIcon)`
	color: ${appColors.yellow};
`;
const StarRatingContainer = styled.span`
	display: flex;
`;

const emptyStar = (key) => <StarIcon key={key} icon={faStarEmpty} />;
const halfStar = (key) => <StarIcon key={key} icon={faStarHalf} />;
const fullStar = (key) => <StarIcon key={key} icon={faStar} />;

const StarRating = ({ score, maxScore }) => {
	if (score < 0 || score > maxScore) {
		throw Error(`Star count must be from 0 to ${maxScore}`);
	}

	const stars = (score * 5) / maxScore;
	const fullStarCount = Math.floor(stars);
	const components = [];

	for (let i = 0; i < 5; i += 1) {
		if (i < fullStarCount) {
			components.push(fullStar(i));
		} else if (i === fullStarCount) {
			const starDiff = stars - fullStarCount;

			if (starDiff <= 0.25) {
				components.push(emptyStar(i));
			} else if (starDiff > 0.25 && starDiff < 0.75) {
				components.push(halfStar(i));
			} else if (starDiff >= 0.75) {
				components.push(fullStar(i));
			}
		} else {
			components.push(emptyStar(i));
		}
	}

	return <StarRatingContainer>{components}</StarRatingContainer>;
};

StarRating.propTypes = {
	score: PropTypes.number.isRequired,
	maxScore: PropTypes.number,
};

StarRating.defaultProps = {
	maxScore: 5,
};

export default StarRating;
