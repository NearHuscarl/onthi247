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
import styled, { appColors, theme } from '../styles';
import Input, { InputGroup, InputSuffixButton } from '../components/Input';
import { ButtonText } from '../components/Buttons';

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

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 0;
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;
`;
const Search = styled(InputGroup)`
	width: 35rem;
`;

function Header() {
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
				<Search>
					<Input
						type='text'
						placeholder='Nhập ID của câu hỏi cần xem đáp án và lời giải...'
						aria-label='Username'
						aria-describedby='basic-addon1'
					/>
					<InputSuffixButton dense type='button'>
						<FontAwesomeIcon icon={faSearch} />
					</InputSuffixButton>
				</Search>
				<ButtonText type='button' highlight>
					<FontAwesomeIcon className='mr-tn' icon={faShoppingCart} />
					<span className='cart__text'>Các khóa học đã chọn</span>
				</ButtonText>
			</Main>
			<Nav />
		</HeaderContainer>
	);
}

export default Header;
