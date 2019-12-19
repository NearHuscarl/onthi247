import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import range from 'lodash/range';
import classNames from 'classnames';

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

const buttonClassName = (currentPage, btnPage) =>
	'btn btn--padding-sm' + (btnPage === currentPage ? '' : ' btn--white');

export default function Pagination({ className }) {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<Container className={classNames({ [className]: className !== '' })}>
			<button type='button' className='btn btn--padding-sm btn--white'>
				đầu
			</button>
			<button type='button' className='btn btn--padding-sm btn--white'>
				trước
			</button>
			{range(1, 6).map((i) => (
				<button
					key={i}
					type='button'
					className={buttonClassName(currentPage, i)}
					onClick={() => setCurrentPage(() => i)}
				>
					{i}
				</button>
			))}
			<DotDotDot>...</DotDotDot>
			<button
				type='button'
				className={buttonClassName(currentPage, 30)}
				onClick={() => setCurrentPage(() => 30)}
			>
				30
			</button>
			<button type='button' className='btn btn--padding-sm btn--white'>
				tiếp
			</button>
			<button type='button' className='btn btn--padding-sm btn--white'>
				cuối
			</button>
		</Container>
	);
}

Pagination.propTypes = {
	className: PropTypes.string,
};

Pagination.defaultProps = {
	className: '',
};
