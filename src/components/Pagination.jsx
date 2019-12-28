import React, { useState } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import classNames from 'classnames';
import { PrimaryWhiteButton } from './Buttons';
import styled from '../styles';

const Container = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, min-content) repeat(7, 3.3rem) repeat(
			2,
			min-content
		);
	grid-template-rows: repeat(auto-fit, 3.3rem);
	column-gap: 0.4rem;
`;
const DotDotDot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

function getButton(index, currentPage, setCurrentPage) {
	const selectedPage = currentPage === index;
	return (
		<PrimaryWhiteButton
			key={index}
			type='button'
			dense
			active={selectedPage}
			onClick={() => setCurrentPage(() => index)}
		>
			{index}
		</PrimaryWhiteButton>
	);
}

export default function Pagination({ className }) {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<Container className={classNames({ [className]: className !== '' })}>
			<PrimaryWhiteButton type='button' dense>
				đầu
			</PrimaryWhiteButton>
			<PrimaryWhiteButton type='button' dense>
				trước
			</PrimaryWhiteButton>
			{range(1, 6).map((i) => getButton(i, currentPage, setCurrentPage))}
			<DotDotDot>...</DotDotDot>
			{getButton(30, currentPage, setCurrentPage)}
			<PrimaryWhiteButton type='button' dense>
				tiếp
			</PrimaryWhiteButton>
			<PrimaryWhiteButton type='button' dense>
				cuối
			</PrimaryWhiteButton>
		</Container>
	);
}

Pagination.propTypes = {
	className: PropTypes.string,
};

Pagination.defaultProps = {
	className: '',
};
