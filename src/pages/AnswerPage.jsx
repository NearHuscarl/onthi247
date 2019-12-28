import React from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';
import QuestionList from '../components/QuestionList';
import Tag, { TagGroup } from '../components/Tag';
import ContentContainer from '../layout/ContentContainer';
import QaProfile from '../components/QaProfile';
import SizedBox from '../components/SizedBox';
import Button, { ButtonText } from '../components/Buttons';
import Line from '../components/Line';
import { H2, H3 } from '../components/Headings';
import Selector from '../components/Selector';
import { questionProps } from '../utilities/proptypes';
import styled, { appColors, theme } from '../styles';
import answers from '../data/answers';
import { questions } from '../data/questions';
import UpvoteScore from '../components/UpvoteScore';
import timeSince from '../utilities/timeSince';

const FlexContainer = styled.div`
	display: flex;
`;

const Content = styled.div`
	display: flex;
	margin-top: 2.7rem;
	margin-bottom: 4.4rem;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		align-self: center;
		font-weight: bold;
	}
`;

const ColumnLeft = styled.div`
	margin-right: 2.6rem;
	width: 100%;
`;

const ColumnRight = styled.div`
	flex: 0 1;
`;

const Side = styled.div`
	flex: 0 0 7rem;
	margin-right: 1.9rem;
	display: flex;
	justify-content: center;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Tags = styled(TagGroup)`
	margin: 0.5rem 0 1.5rem 0;
`;

const Main = styled.div`
	width: 100%;
`;

const Description = styled.div`
	max-width: 45rem;
`;

const QaButtonText = styled(ButtonText)`
	font-size: 1rem;
	display: block;
	color: ${appColors.greyDark1};

	:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const FilterGroup = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
	margin-bottom: 2rem;
`;

const AnswerFilter = styled(Selector)`
	width: 13.5rem;
`;

const UserTag = styled(Tag)`
	color: #0077cc;
`;

const Comment = styled.div`
	display: flex;
	align-items: center;
	padding-left: 1.25rem;

	& > :not(:last-child) {
		margin-right: 1rem;
	}

	.date {
		font-size: 1rem;
	}
`;
const CommentButton = styled(QaButtonText)`
	padding-left: 1.25rem;
`;

const RichEditor = styled(RichTextEditor)`
	.DraftEditor-root {
        min-height: 12rem;
        font-family: ${theme.primaryFont};
        font-size: 1.2rem;
    }

    [class*='IconButton__icon'] {
        /* change button background image from hard black to grey */
        filter: opacity(60%);
    }
`;

const options = [
	{ value: 'most_related', label: 'Phù hợp nhất' },
	{ value: 'newest', label: 'Mới nhất' },
];

function AnswerPage({ hotQuestions, newQuestions }) {
	const history = useHistory();
	const question = questions.Q00001;
	const [filter, setFilter] = React.useState(options[0]);

	return (
		<ContentContainer as='main'>
			<Header>
				<H2 className='mt-md'>
					Nhờ giúp đỡ dạng bài tìm giá trị của m để hàm số đạt cực trị
					<H2 sub className='mt-tn'>
						Môn Toán - Lượt xem: 30
					</H2>
				</H2>
				<Button
					type='button'
					onClick={() => history.push('/questions/ask')}
				>
					Đặt câu hỏi mới
				</Button>
			</Header>
			<Line />
			<Content>
				<ColumnLeft>
					<FlexContainer>
						<Side>
							<UpvoteScore score={question.votes} />
						</Side>
						<Main>
							<Description>
								<div>{question.description}</div>
								<Tags>
									{question.tags.map((t) => (
										<Tag key={t}>{t}</Tag>
									))}
								</Tags>
							</Description>
							<Bottom>
								<div>
									<QaButtonText>
										Chỉnh sửa lại nội dung của câu hỏi này
									</QaButtonText>
									<QaButtonText>Thêm bình luận mới</QaButtonText>
								</div>
								<QaProfile user={question.user} date={question.date} />
							</Bottom>
						</Main>
					</FlexContainer>
					<SizedBox height={4} />
					<FilterGroup>
						<H3>2 câu trả lời</H3>
						<AnswerFilter
							value={filter}
							onChange={(selectedValue) =>
								setFilter(() => selectedValue)
							}
							options={options}
						/>
					</FilterGroup>
					{answers.map((a, index) => (
						<>
							<FlexContainer>
								<Side>
									<UpvoteScore score={a.votes} accepted={a.accepted} />
								</Side>
								<Main>
									<Description>
										<div>{a.description}</div>
									</Description>
									<Bottom>
										<QaButtonText>
											Chỉnh sửa lại nội dung của câu trả lời này
										</QaButtonText>
										<QaProfile
											user={question.user}
											date={question.date}
										/>
									</Bottom>
									{a.comments.length > 0 && (
										<>
											<SizedBox height={2} />
											<Line />
										</>
									)}
									{a.comments.map((c) => (
										<>
											<Comment>
												<div>{c.content}</div>
												<UserTag>{c.user.name}</UserTag>
												<div className='date'>
													{timeSince(new Date(c.date)) + ' trước'}
												</div>
											</Comment>
											<Line />
										</>
									))}
									<CommentButton>Thêm bình luận mới</CommentButton>
								</Main>
							</FlexContainer>
							{index !== answers.length - 1 && <Line medium />}
						</>
					))}
					<SizedBox height={4} />
					<Pagination />
					<SizedBox height={5} />
					<H3>Câu trả lời của bạn</H3>
					<RichEditor
						value={RichTextEditor.createEmptyValue()}
						placeholder='Nhập nội dung câu trả lời'
					/>
				</ColumnLeft>
				<ColumnRight>
					<QuestionList
						title='Bạn có thể quan tâm'
						questions={hotQuestions}
						className='mb-md'
					/>
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

AnswerPage.propTypes = {
	hotQuestions: PropTypes.arrayOf(questionProps).isRequired,
	newQuestions: PropTypes.arrayOf(questionProps).isRequired,
};

const mapStateToProps = (state) => ({
	hotQuestions: Object.values(state.questions.hotQuestions),
	newQuestions: Object.values(state.questions.newQuestions),
});

export default connect(mapStateToProps, null)(AnswerPage);
