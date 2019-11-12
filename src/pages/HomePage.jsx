import React from 'react';

const HomePage = () => (
	<React.Fragment>
		<main className='content'>
			<h2 className='h2'>
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
				<div className='card'>
					<div className='h3'>Câu hỏi 01</div>
					<span>Chưa trả lời</span>
					<button type='button' className='btn-outline'>Lưu lại</button>
				</div>
				<div className='card'>
					<div className='h3'>
						Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch
						brom. Tên gọi của X là
					</div>
					<div className='answer'>
						<div className='answer__text'>axit β-aminopropionic</div>
						<div className='answer__stats'>25% người tham gia lựa chọn</div>
					</div>
				</div>
				<div className='card'>
					<div className='h3'>Lời giải chi tiết</div>
					<div>
						<p>X làm mất màu Br2 => X chứa nối đôi C=C</p>
						<p>&#8594; X là CH2=CHCOONH4 (Amoni acrylat)</p>
						<p>CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4</p>
						<p>&#8594; Đáp án D</p>
					</div>
				</div>
				<div className='comment' />
			</div>
			<section className='suggested-exams'>Suggested exams</section>
			<section className='featured-exams'>Featured exams</section>
			<section className='newest-exams'>Newest exams</section>
		</main>
	</React.Fragment>
);

export default HomePage;
