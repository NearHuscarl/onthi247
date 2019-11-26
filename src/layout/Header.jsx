import React from 'react';
import {
	faSearch,
	faBell,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import profile from '../../public/images/profile.png';

function Header() {
	return (
		<header className='header'>
			<div className='header__top-bg'>
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
						<span className='profile__name'>Xin chào, bé dủng</span>
						<FontAwesomeIcon className='notification' icon={faBell} />
					</div>
				</div>
			</div>
			<div className='header__main'>
				<Logo />
				<div className='header__search input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Nhập ID của câu hỏi cần xem đáp án và lời giải...'
						aria-label='Username'
						aria-describedby='basic-addon1'
					/>
					<div className='input-group-append'>
						<button className='btn btn--padding-sm' type='button'>
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</div>
				</div>
				<button type='button' className='btn-text btn-text--highlight'>
					<FontAwesomeIcon className='mr-tn' icon={faShoppingCart} />
					<span className='cart__text'>Các khóa học đã chọn</span>
				</button>
			</div>
			<Nav />
		</header>
	);
}

export default Header;
