import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonChip from '../components/ButtonChip';
import Selector from '../components/Selector';

const filterOptions = [
	{ value: 'difficulty', label: 'Độ khó' },
	{ value: 'class', label: 'Lớp' },
];
const sortOptions = [
	{ value: 'most_related', label: 'Phù hợp nhất' },
	{ value: 'newest', label: 'Mới nhất' },
];

export default function Filters({ title, subTitle }) {
	const [filter, setFilter] = useState(null);
	const [sort, setSort] = useState(null);

	return (
		<div className='filters-bg'>
			<div className='filters'>
				<div className='filters__title'>
					<h2 className='h2'>{title}</h2>
					<p>{subTitle}</p>
				</div>
				<div className='filters__item'>
					<Selector
						className='filters__filter'
						value={filter}
						placeholder='Bộ lọc'
						onChange={(selectedValue) => setFilter(() => selectedValue)}
						options={filterOptions}
					/>
					<Selector
						className='filters__sort'
						value={sort}
						placeholder='Sắp xếp theo'
						onChange={(selectedValue) => setSort(() => selectedValue)}
						options={sortOptions}
					/>
				</div>

				<div className='filters__search input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Nhập từ khóa cần tìm kiếm...'
					/>
					<button type='button' className='filters__search-btn btn-text'>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
				<div className='filters__chip'>
					<ButtonChip name='Hóa học' onClick={() => {}} />
					<ButtonChip name='Sinh học' onClick={() => {}} />
					<button type='button' className='btn btn--grey'>
						Xóa bộ lọc
					</button>
				</div>
			</div>
		</div>
	);
}

Filters.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};
