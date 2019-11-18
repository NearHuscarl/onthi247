/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const navItems = {
	khoaHoc: 'Khóa học',
	gioiThieu: 'Giới thiệu',
	giaoVien: 'Giáo viên',
	bangXepHang: 'Bảng xếp hạng',
	baiTap: 'Bài tập',
	thiThu: 'Thi thử',
	taiLieu: 'Tài liệu',
	hoiDap: 'Hỏi đáp',
};

export function NavItem({ name, route, selectedItem, setSelectedItem }) {
	return (
		<li
			className={
				name === selectedItem
					? 'nav__item nav__item--highlight'
					: 'nav__item'
			}
		>
			<Link
				to={route}
				className='nav__link'
				// https://stackoverflow.com/a/20249560/9449426
				// normal text becomes bold text when hovered, but bold text is more densed
				// so hovering will make the container width shrinking. Workaround is to define
				// a::after psuedo element to reserve extra space by adding ' |' character
				// after the title tag (which will be passed to ::after's content)
				title={name + '|'}
				onClick={() => setSelectedItem(() => name)}
			>
				{name}
			</Link>
		</li>
	);
}

NavItem.propTypes = {
	name: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	selectedItem: PropTypes.string.isRequired,
	setSelectedItem: PropTypes.func.isRequired,
};

export default function Nav() {
	const [selectedItem, setSelectedItem] = useState(navItems.khoaHoc);

	return (
		<div className='nav-bg'>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item nav__item--home'>
						<a href='/' className='nav__link'>
							<i className='fas fa-home' aria-hidden='true' />
						</a>
					</li>
					<li className='nav__item nav__item--primary'>
						<a href='/' className='nav__link'>
							Khóa học
						</a>
					</li>
					<NavItem
						name={navItems.gioiThieu}
						route="/"
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.giaoVien}
						route="/"
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.bangXepHang}
						route="/"
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.baiTap}
						route="/exams"
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.thiThu}
						route="/"
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.taiLieu}
						route="/"
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.hoiDap}
						route="/"
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
				</ul>
			</nav>
		</div>
	);
}
