import React, { useState } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import classNames from 'classnames';

const buttonClassName = (currentPage, btnPage) =>
	'btn btn--padding-sm' + (btnPage === currentPage ? '' : ' btn--white');

export default function Pagination({ className }) {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<div
			className={classNames({
				pagination: true,
				[className]: className !== '',
			})}
		>
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
			<div className='pagination__3dot'>...</div>
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
		</div>
	);
}

Pagination.propTypes = {
	className: PropTypes.string,
};

Pagination.defaultProps = {
	className: '',
};
