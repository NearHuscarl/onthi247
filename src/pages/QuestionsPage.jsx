import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Filters from '../layout/Filters';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import QuestionPreviewList from '../components/QuestionPreviewList';
import QuestionList from '../components/QuestionList';
import Chip from '../components/Chip';
import ContentContainer from '../layout/ContentContainer';
import { questionProps } from '../utilities/proptypes';
import { helperStyles } from '../constants';

const QuestionPage = styled.main``;

export const Content = styled.div`
	display: flex;
	margin-top: 2.7rem;
	margin-bottom: 4.4rem;
`;

export const ColumnLeft = styled.div`
	margin-right: 2.6rem;
	width: 100%;
`;

export const ColumnRight = styled.div`
	flex: 0 1;

	button {
		width: 100%;
		margin-bottom: 1.7rem;
	}
`;

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;

	& > :not(:last-child) {
		margin-right: 0.8rem;
	}
	& > * {
		margin-top: 0.8rem;
	}

	${helperStyles.marginBottomMedium}
`;

function QuestionsPage({ questions, hotQuestions, newQuestions }) {
	const history = useHistory();

	return (
		<QuestionPage>
			<Filters
				title='Danh sách câu hỏi'
				subTitle='Có tất cả 300 câu hỏi trong danh sách'
			/>
			<ContentContainer>
				<Content>
					<ColumnLeft>
						<QuestionPreviewList questions={questions} />
					</ColumnLeft>
					<ColumnRight>
						<button
							type='button'
							className='btn bold mb-md'
							onClick={() => history.push('/questions/ask')}
						>
							Đặt câu hỏi mới
						</button>
						<h3 className='h3'>Thẻ nổi bật</h3>
						<Tags>
							<Chip>Hàm số</Chip>
							<Chip>Tính số mol</Chip>
							<Chip>Hệ tọa độ Oxyz</Chip>
							<Chip>Hình học không gian</Chip>
							<Chip>Đạo hàm</Chip>
							<Chip>Hóa hữu cơ</Chip>
							<Chip>Điện trở</Chip>
						</Tags>
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
		</QuestionPage>
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
