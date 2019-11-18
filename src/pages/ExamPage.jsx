import React from 'react';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import Standing from '../components/Standing';
import ExamPreviewList from '../components/ExamPreviewList';
import Pagination from '../components/Pagination';
import ExamCardList from '../components/ExamCardList';

const ExamPage = () => (
	<main>
		<Filters />
		<div className='content-container'>
			<Standing />
			<Ads />
			<ExamPreviewList />
			<Pagination />
			<div className='recommend'>
				<ExamCardList title='Các bài tập nổi bật' />
				<div className='mb-md' />
				<ExamCardList title='Các bài tập mới nhất' />
			</div>
		</div>
	</main>
);

export default ExamPage;
