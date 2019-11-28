import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filters from '../layout/Filters';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import QuestionPreviewList from '../components/QuestionPreviewList';
import QuestionList from '../components/QuestionList';
import Chip from '../components/Chip';
import { questionProps } from '../utilities/proptypes';

function QuestionsPage({ questions, hotQuestions, newQuestions }) {
	return (
		<main className='questions-page'>
			<Filters
				title='Danh sách câu hỏi'
				subTitle='Có tất cả 300 câu hỏi trong danh sách'
			/>
			<div className='content-container'>
				<div className='questions-page__content'>
					<div className='questions-page__col-left'>
						<QuestionPreviewList questions={questions} />
					</div>
					<div className='questions-page__col-right'>
						<button type='button' className='btn bold mb-md'>
							Đặt câu hỏi mới
						</button>
						<h3 className='h3'>Thẻ nổi bật</h3>
						<div className='questions-page__tags mb-md'>
							<Chip>Hàm số</Chip>
							<Chip>Tính số mol</Chip>
							<Chip>Hệ tọa độ Oxyz</Chip>
							<Chip>Hình học không gian</Chip>
							<Chip>Đạo hàm</Chip>
							<Chip>Hóa hữu cơ</Chip>
							<Chip>Điện trở</Chip>
						</div>
						<QuestionList
							title='Câu hỏi nổi bật'
							questions={hotQuestions}
							className='mb-md'
						/>
						<QuestionList
							title='Câu hỏi mới nhất'
							questions={newQuestions}
							className='mb-md'
						/>
						<Ads />
					</div>
				</div>
				<Pagination />
			</div>
		</main>
	);
}

QuestionsPage.propTypes = {
	questions: PropTypes.arrayOf(questionProps).isRequired,
	hotQuestions: PropTypes.arrayOf(questionProps).isRequired,
	newQuestions: PropTypes.arrayOf(questionProps).isRequired,
};

const mapStateToProps = (state) => ({
	questions: Object.values(state.questions.questions),
	hotQuestions: Object.values(state.questions.hotQuestions),
	newQuestions: Object.values(state.questions.newQuestions),
});

export default connect(mapStateToProps, null)(QuestionsPage);
