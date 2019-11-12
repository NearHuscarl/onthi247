/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import profile from '../../public/images/profile.png';

function Header() {
	return (
		<header className='header'>
			<div className='header__top'>
				<div className='support'>
					Hotline: 1900-0000{' '}
					<span className='support support--time'>
						(Thời gian hỗ trợ từ 7h - 22h)
					</span>
				</div>
				<div className='profile'>
					<img
						src={profile}
						alt='profile avatar'
						className='profile__img'
					/>
					<span className='profile__name'>Xin chào, bebi</span>
					<i className='notification fas fa-bell' aria-hidden='true' />
				</div>
			</div>
			<div className='header__main'>
				<h1 className='h1'>
					OnThi<span className='h1 h1--orange'>247</span>
				</h1>
				<div className='header__search input-group'>
					<input
						type='text'
						className='input form-control'
						placeholder='ID câu hỏi'
						aria-label='Username'
						aria-describedby='basic-addon1'
					/>
					<div className='input-group-append'>
						<button
							className='btn btn--orange'
							type='button'
							id='button-addon1'
						>
							<i className='fas fa-search' aria-hidden='true' />
						</button>
					</div>
				</div>
				<div className='cart'>
					<i className='fas fa-shopping-cart mr-tn' aria-hidden='true' />
					<span className='cart__text'>Các khóa học đã chọn</span>
				</div>
			</div>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item nav__item--home'>
						<a href='#' className='nav__link'>
							<i className='fas fa-home' aria-hidden='true' />
						</a>
					</li>
					<li className='nav__item nav__item--primary'>
						<a href='#' className='nav__link'>
							Khóa học
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Giới thiệu
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Giáo viên
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Bảng xếp hạng
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Bài tập
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Thi thử
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Tài liệu
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Hỏi đáp
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
