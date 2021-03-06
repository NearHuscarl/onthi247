import React from 'react';
import { useHistory } from 'react-router-dom';
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import { SearchBar } from '../components/Input';
import { ButtonText } from '../components/Buttons';
import ProfileTooltip from '../components/ProfileTooltip';
import NotificationTooltip from '../components/NotificationTooltip';
import styled, { appColors, theme } from '../styles';
import routes from '../routes';
import { activeUser } from '../data/users';

const ButtonWithCounter = styled(ButtonText)`
	position: relative;

	&:hover,
	&:active,
	&:focus {
		color: currentcolor;
	}

	&::after {
		content: '';
		position: absolute;
		top: 10%;
		left: 80%;
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background-color: ${appColors.red};
		opacity: ${(props) => (props.hasNotification ? '100%' : '0%')};
	}
`;

function NotificationButton() {
	const [hasNotification, setHasNottification] = React.useState(true);
	return (
		<NotificationTooltip>
			<ButtonWithCounter
				hasNotification={hasNotification}
				onClick={() => {
					setHasNottification(false);
				}}
			>
				<FontAwesomeIcon icon={faBell} />
			</ButtonWithCounter>
		</NotificationTooltip>
	);
}

const HeaderContainer = styled.header`
	margin: 0 auto;
`;
const TopBackground = styled.div`
	background-color: ${appColors.greyLight1};
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;
	padding: 0.7rem 0;
`;

const Support = styled.span`
	color: ${appColors.greyDark1};
	margin-right: auto;
`;
const Profile = styled(ButtonText)`
	display: flex;
`;
const ProfileImage = styled.img`
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	object-fit: cover;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);

	margin-right: 0.7rem;
	cursor: pointer;
`;
const ProfileName = styled.span`
	margin-right: 2rem;
	font-weight: 600;
	display: inline-flex;
	align-items: center;
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
	padding: 2.5rem 0;
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;
`;

function Header() {
	const history = useHistory();

	return (
		<HeaderContainer>
			<NotificationTooltip />
			<TopBackground>
				<Top>
					Hotline: 1900-0000&nbsp;
					<Support>(Thời gian hỗ trợ từ 7h - 22h)</Support>
					<ProfileTooltip>
						<Profile>
							<ProfileImage
								src={activeUser.avatar}
								alt='profile avatar'
							/>
							<ProfileName>{`Xin chào, ${activeUser.name}`}</ProfileName>
						</Profile>
					</ProfileTooltip>
					<NotificationButton />
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
