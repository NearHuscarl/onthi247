import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Content, ColumnLeft, ColumnRight } from './QuestionsPage';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Ads from '../components/Ads';
import QuestionListSideBar from '../components/QuestionListSideBar';
import Selector from '../components/Selector';
import { Line } from '../components/Common';
import Input, { InputGroup } from '../components/Input';
import Button from '../components/Buttons';
import { H2 } from '../components/Headings';
import ContentContainer from '../layout/ContentContainer';
import { questionProps } from '../utilities/proptypes';
import styled from '../styles';

const AskForm = styled(ColumnLeft)`
	display: flex;
	flex-direction: column;

	button {
		align-self: end;
	}
`;

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
		<>
			<Breadcrumb path={[routes.home, routes.question, 'Đặt câu hỏi mới']} />
			<ContentContainer as='main'>
				<H2 className='mt-md'>
					Đặt câu hỏi mới
					<H2 sub className='mt-tn'>
						Đặt câu hỏi để nhận được sự hỗ trợ từ cộng đồng học sinh của
						OnThi247
					</H2>
				</H2>
				<Line />
				<Content>
					<AskForm>
						<div className='bold mb-sm'>Tiêu đề câu hỏi</div>
						<InputGroup className='mb-sm'>
							<Input
								type='text'
								placeholder={questionTitle}
								aria-label={questionTitle}
							/>
						</InputGroup>
						<div className='bold mb-sm'>Nội dung câu hỏi</div>
						<InputGroup className='mb-sm'>
							<textarea
								type='text'
								placeholder={questionBody}
								aria-label={questionBody}
								rows={10}
							/>
						</InputGroup>
						<div className='bold mb-sm'>Môn học</div>
						<Selector
							placeholder='Chọn môn học từ danh sách'
							value={filter}
							onChange={(selectedValue) =>
								setFilter(() => selectedValue)
							}
							options={options}
						/>
						<Button
							type='button'
							className='bold mt-md'
							onClick={() => history.push('/questions')}
						>
							Đăng câu hỏi
						</Button>
					</AskForm>
					<ColumnRight>
						<QuestionListSideBar
							title='Câu hỏi nổi bật'
							questions={hotQuestions}
							className='mb-md'
						/>
						<QuestionListSideBar
							title='Câu hỏi mới nhất'
							questions={newQuestions}
							className='mb-md'
						/>
						<Ads />
					</ColumnRight>
				</Content>
			</ContentContainer>
		</>
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
