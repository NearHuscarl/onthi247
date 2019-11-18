import React, { useState } from 'react';
import Select from 'react-select';
import Chip from '../components/Chip';

const filterOptions = [
	{ value: 'difficulty', label: 'Độ khó' },
	{ value: 'class', label: 'Lớp' },
];
const sortOptions = [
	{ value: 'most_related', label: 'Phù hợp nhất' },
	{ value: 'newest', label: 'Mới nhất' },
];

export default function Filters() {
	const [filter, setFilter] = useState(null);
	const [sort, setSort] = useState(null);

	return (
		<div className='filters-bg'>
			<div className='filters'>
				<div className='filters__title'>
					<h2 className='h2'>Danh sách bài tập</h2>
					<p>Có tất cả 300 bài tập trong danh sách</p>
				</div>
				<div className='filters__item'>
					<Select
						className='filters__filter'
						value={filter}
						placeholder='Bộ lọc'
						onChange={(selectedValue) => setFilter(() => selectedValue)}
						options={filterOptions}
					/>
					<Select
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
				</div>
				<div className='filters__chip'>
					<Chip name='Hóa học' onClick={() => {}} />
					<Chip name='Sinh học' onClick={() => {}} />
					<button type='button' className='btn btn--grey'>
						Xóa bộ lọc
					</button>
				</div>
			</div>
		</div>
	);
}
