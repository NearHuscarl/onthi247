import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonChip from '../components/ButtonChip';
import Selector from '../components/Selector';
import { appColors, theme } from '../constants';

const FilterBackground = styled.div`
	background-color: ${appColors.greyLight1};
`;
const FilterContainer = styled.div`
	max-width: ${theme.pageContainerWidth};
	padding: 2.8rem 0;
	margin: 0 auto;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: min-content;
	gap: 1.8rem;

	// override bs's reboot
	p {
		margin-bottom: 0;
	}

	// override bs right border-radius
	.input-group > .form-control:not(:last-child) {
		border-radius: var(--border-round);
	}
`;
const FilterGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	& > :not(:last-child) {
		margin-right: 1.5rem;
	}
`;
const FilterOption = styled(Selector)`
	width: 10rem;
`;
const FilterSort = styled(Selector)`
	width: 14rem;
`;
const Search = styled.div`
	grid-column: 1 / -1;
	position: relative;
`;
const buttonSize = '2rem';
const ClearButton = styled.button`
	position: absolute;
	top: calc(((100% - ${buttonSize}) / 2));
	right: 1rem;
	width: ${buttonSize};
	height: ${buttonSize};
	background-color: ${appColors.greyLight3};
	color: ${appColors.greyDark2};
	border-radius: 50%;
	z-index: 100; // not sure what bs do to input z-index when focused

	&:hover {
		color: ${appColors.white};
	}
`;
const ChipGroup = styled.div`
	display: flex;
	align-items: center;

	& > :not(:last-child) {
		margin-right: 0.8rem;
	}
`;

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
		<FilterBackground>
			<FilterContainer>
				<div>
					<h2 className='h2'>{title}</h2>
					<p>{subTitle}</p>
				</div>
				<FilterGroup>
					<FilterOption
						value={filter}
						placeholder='Bộ lọc'
						onChange={(selectedValue) => setFilter(() => selectedValue)}
						options={filterOptions}
					/>
					<FilterSort
						value={sort}
						placeholder='Sắp xếp theo'
						onChange={(selectedValue) => setSort(() => selectedValue)}
						options={sortOptions}
					/>
				</FilterGroup>

				<Search className='input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Nhập từ khóa cần tìm kiếm...'
					/>
					<ClearButton type='button' className='btn-text'>
						<FontAwesomeIcon icon={faTimes} />
					</ClearButton>
				</Search>
				<ChipGroup>
					<ButtonChip name='Hóa học' onClick={() => {}} />
					<ButtonChip name='Sinh học' onClick={() => {}} />
					<button type='button' className='btn btn--grey'>
						Xóa bộ lọc
					</button>
				</ChipGroup>
			</FilterContainer>
		</FilterBackground>
	);
}

Filters.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
};
