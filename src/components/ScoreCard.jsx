import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ScoreCard({ className }) {
	return (
		<div
			className={classNames({
				'score-card': true,
				[className]: className !== '',
			})}
		>
			<h4 className='score-card__heading h4'>Thành tích cá nhân</h4>
			<div className='line line--dark' />
			<div className='score-card__content'>
				<div>Kết quả cao nhất</div>
				<div className='score-card__score'>30/30</div>
				<div className='score-card__time'>10 phút 56 giây</div>
				<div className='score-card__date'>31/10/2019</div>
			</div>
			<div className='line line--m0 line--dark' />
			<div className='score-card__bottom'>
				<div>
					<div className='score-card__bottom__label'>Số lần làm bài</div>
					<div className='score-card__bottom__value'>10</div>
				</div>
				<div>
					<div className='score-card__bottom__label'>Điểm kinh nghiệm</div>
					<div className='score-card__bottom__value'>600</div>
				</div>
			</div>
		</div>
	);
}

ScoreCard.propTypes = {
	className: PropTypes.string,
};
ScoreCard.defaultProps = {
	className: '',
};
