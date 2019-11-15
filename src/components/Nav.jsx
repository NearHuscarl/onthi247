/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Nav() {
	return (
		<div className='nav-bg'>
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
						{/*
						https://stackoverflow.com/a/20249560/9449426
						normal text becomes bold text when hovered, but bold text is more densed
						so hovering will make the container width shrinking. Workaround is to define
						a::after psuedo element to reserve extra space by adding ' |' character
						after the title tag (which will be passed to ::after's content)
						 */}
						<a href='#' className='nav__link' title='Giới thiệu |'>
							Giới thiệu
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link' title='Giáo viên |'>
							Giáo viên
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link' title='Bảng xếp hạng |'>
							Bảng xếp hạng
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link' title='Bài tập |'>
							Bài tập
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link' title='Thi thử |'>
							Thi thử
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link' title='Tài liệu |'>
							Tài liệu
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link' title='Hỏi đáp |'>
							Hỏi đáp
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
