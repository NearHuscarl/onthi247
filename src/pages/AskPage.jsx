import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Content, ColumnLeft, ColumnRight } from './QuestionsPage';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import QuestionList from '../components/QuestionList';
import Selector from '../components/Selector';
import Line from '../components/Line';
import { questionProps } from '../utilities/proptypes';
import ContentContainer from '../layout/ContentContainer';

const AskForm = styled(ColumnLeft)`
	display: flex;
	flex-direction: column;

	button {
		align-self: end;
	}
`

const options = [
	{ value: 'toan', label: 'Toán' },
	{ value: 'vatLy', label: 'Vật lý' },
	{ value: 'hoaHoc', label: 'Hóa học' },
	{ value: 'sinhHoc', label: 'Sinh học' },
	{ value: 'lichSu', label: 'Lịch sử' },
	{ value: 'diaLy', label: 'Địa lý' },
];

function AskPage({ hotQuestions, newQuestions }) {
	const history = useHistory();
	const questionTitle = 'Nhập tiêu đề của câu hỏi';
	const questionBody = 'Nhập nội dung của câu hỏi';
	const [filter, setFilter] = React.useState(null);

	return (
		<ContentContainer mainTag>
			<h2 className='h2 mt-md'>
				Đặt câu hỏi mới
				<div className='h2 h2--sub mt-tn'>
					Đặt câu hỏi để nhận được sự hỗ trợ từ cộng đồng học sinh của
					OnThi247
				</div>
			</h2>
			<Line />
			<Content>
				<AskForm>
					<div className='bold mb-sm'>Tiêu đề câu hỏi</div>
					<div className='input-group mb-sm'>
						<input
							type='text'
							className='form-control'
							placeholder={questionTitle}
							aria-label={questionTitle}
						/>
					</div>
					<div className='bold mb-sm'>Nội dung câu hỏi</div>
					<div className='input-group mb-sm'>
						<textarea
							type='text'
							className='form-control'
							placeholder={questionBody}
							aria-label={questionBody}
							rows={10}
						/>
					</div>
					<div className='bold mb-sm'>Môn học</div>
					<Selector
						placeholder='Chọn môn học từ danh sách'
						value={filter}
						onChange={(selectedValue) => setFilter(() => selectedValue)}
						options={options}
					/>
					<button
						type='button'
						className='btn bold mt-md ask-form__btn'
						onClick={() => history.push('/questions')}
					>
						Đăng câu hỏi
					</button>
				</AskForm>
				<ColumnRight>
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
				</ColumnRight>
			</Content>
			<Pagination />
		</ContentContainer>
	);
}

AskPage.propTypes = {
	hotQuestions: PropTypes.arrayOf(questionProps).isRequired,
	newQuestions: PropTypes.arrayOf(questionProps).isRequired,
};

const mapStateToProps = (state) => ({
	hotQuestions: Object.values(state.questions.hotQuestions),
	newQuestions: Object.values(state.questions.newQuestions),
});

export default connect(mapStateToProps, null)(AskPage);
