import React from 'react';
import { Link } from 'react-router-dom';
import AnswerCard from '../components/AnswerCard';
import Card from '../components/Card';
import QuestionGrid from '../components/QuestionGrid';
import CommentSection from '../components/CommentSection';
import Ads from '../components/Ads';
import Pagination from '../components/Pagination';

const question =
	'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là';
const answers = [
	{
		text: 'axit β-aminopropionic',
		percentage: 25,
	},
	{
		text: 'mety aminoaxetat',
		percentage: 9,
	},
	{
		text: 'axit α-aminopropionic',
		percentage: 16,
	},
	{
		text: 'amoni acrylat',
		percentage: 50,
	},
];

const HomePage = () => (
	<React.Fragment>
		<main className='content-container'>
			<h2 className='h2 mt-md'>
				Bài tập Amin - Amino Axit - Peptit - Protein
				<div className='h2 h2--sub'>30 câu hỏi - Trình độ cơ bản</div>
			</h2>
			<div className='line' />
			<div className='result-summary'>
				<h2 className='h2'>Kết quả tổng quan</h2>
				<div className='result-text'>
					<div className='result-text__score'>20/30</div>
					<div className='result-text__time'>10 phút 56 giây</div>
					<div className='result-text__exp'>+600 exp</div>
					<div className='result-text__rank'>
						Xếp hạng 120 trên tổng số 360 người tham gia làm bài
					</div>
				</div>
			</div>
			<div className='result-details'>
				<h2 className='h2'>Đáp án và lời giải chi tiết</h2>
				<div className='result-details__content'>
					<div className='result-details__col-1'>
						<div className='card question-card'>
							<div className='h3'>Câu hỏi 01</div>
							<span className='mb-sm'>Chưa trả lời</span>
							<button type='button' className='btn btn--white'>
								Lưu lại
							</button>
						</div>
					</div>
					<div className='result-details__col-2'>
						<AnswerCard question={question} answers={answers} />
						<Card className='ans-detail-card'>
							<div className='h3'>Lời giải chi tiết</div>
							<div>
								<p>X làm mất màu Br2 &#8594; X chứa nối đôi C=C</p>
								<p>&#8594; X là CH2=CHCOONH4 (Amoni acrylat)</p>
								<p>CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4</p>
								<p>&#8594; Đáp án D</p>
							</div>
						</Card>
						<CommentSection />
					</div>
					<div className='result-details__col-3'>
						<QuestionGrid questionCount={30} />
						<Ads />
					</div>
				</div>
				<Pagination className='mt-lg' />
			</div>
			<section className='suggested-exams'>Suggested exams</section>
			<section className='featured-exams'>Featured exams</section>
			<section className='newest-exams'>Newest exams</section>
			<div>
				404 - <Link to='/news/'>News</Link>
			</div>
		</main>
	</React.Fragment>
);

export default HomePage;
