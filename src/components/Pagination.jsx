import React, { useState } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

const buttonClassName = (currentPage, btnPage) =>
	'btn ' + (btnPage === currentPage ? '' : 'btn--white');

export default function Pagination({ className }) {
	const [currentPage, setCurrentPage] = useState(0);
	const effectiveCurrentPage = currentPage || 1;

	return (
		<div className={'pagination ' + className}>
			<button type='button' className='btn btn--white'>
				đầu
			</button>
			<button type='button' className='btn btn--white'>
				trước
			</button>
			{range(1, 6).map((i) => (
				<button
					key={i}
					type='button'
					className={buttonClassName(effectiveCurrentPage, i)}
					onClick={() => setCurrentPage(() => i)}
				>
					{i}
				</button>
			))}
			<div className='pagination__3dot'>...</div>
			<button
				type='button'
				className={buttonClassName(effectiveCurrentPage, 30)}
				onClick={() => setCurrentPage(() => 30)}
			>
				30
			</button>
			<button type='button' className='btn btn--white'>
				tiếp
			</button>
			<button type='button' className='btn btn--white'>
				cuối
			</button>
		</div>
	);
}

Pagination.propTypes = {
	className: PropTypes.string,
};

Pagination.defaultProps = {
	className: '',
};
