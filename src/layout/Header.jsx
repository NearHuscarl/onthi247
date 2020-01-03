import React from 'react';
import { useHistory } from 'react-router-dom';
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import profile from '../../public/images/profile.png';
import styled, { appColors, theme } from '../styles';
import { SearchBar } from '../components/Input';
import { ButtonText } from '../components/Buttons';
import routes from '../routes';

const HeaderContainer = styled.header`
	margin: 0 auto;
`;
const TopBackground = styled.div`
	background-color: ${appColors.greyLight1};
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;
	padding: 0.7rem 0;
`;

const Support = styled.span`
	color: ${appColors.greyDark1};
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
`;
const ProfileImage = styled.img`
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	object-fit: cover;

	margin-right: 0.7rem;
	cursor: pointer;
`;
const ProfileName = styled.span`
	margin-right: 2rem;
	font-weight: 600;
`;
const Notification = styled(FontAwesomeIcon)`
	cursor: pointer;
`;
const CartButtonText = styled(ButtonText)`
	&:hover,
	&:active,
	&:focus {
		.counter {
			color: currentColor;
		}
	}

	.counter {
		color: ${appColors.red};
		font-weight: 600;
		transition: color 0.25s;
	}
`;

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 0;
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;
`;

function Header() {
	const history = useHistory();

	return (
		<HeaderContainer>
			<TopBackground>
				<Top>
					<div>
						Hotline: 1900-0000{' '}
						<Support>(Thời gian hỗ trợ từ 7h - 22h)</Support>
					</div>
					<Profile>
						<ProfileImage
							src={profile}
							alt='profile avatar'
							className='profile__img'
						/>
						<ProfileName>Xin chào, bé dủng</ProfileName>
						<Notification className='notification' icon={faBell} />
					</Profile>
				</Top>
			</TopBackground>
			<Main>
				<Logo />
				<SearchBar
					placeholder='Nhập ID của câu hỏi cần xem đáp án và lời giải...'
					width={35}
				/>
				<CartButtonText
					type='button'
					onClick={() => history.push(routes.cart.path)}
				>
					<FontAwesomeIcon icon={faShoppingCart} />
					<span>Các khóa học đã chọn </span>
					<span className='counter'>(5)</span>
				</CartButtonText>
			</Main>
			<Nav />
		</HeaderContainer>
	);
}

export default Header;
