import React, { forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedText, Bold } from './Common';
import Tooltip from './Tooltip';
import { ButtonText } from './Buttons';
import styled, { appColors } from '../styles';
import notifications from '../data/notifications';

const Container = styled.div`
	max-width: 38rem;
`;
const Top = styled.div`
	height: 3.2rem;
	padding: 0 1.2rem;
	display: flex;
	align-items: center;

	button {
		font-size: 1.1rem;
	}

	& > :first-child {
		margin-right: auto;
	}
	& > :last-child {
		margin-left: 1rem;
	}
`;
const ListItem = styled.li`
	padding: 1.3rem 1.6rem;
	cursor: pointer;

	:nth-child(odd) {
		background-color: ${appColors.greyLight0};
	}
`;
const Small = styled.div`
	font-size: 1.1rem;
	color: ${appColors.greyDark1};
`;
const UserInfo = styled.div`
	display: grid;
	grid-template-columns: min-content 100%;
	grid-template-rows: repeat(2, max-content);
	column-gap: 1rem;
	align-items: center;

	font-size: 1.3rem;
`;
const Avatar = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	grid-row: 1 / -1;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
`;
const Body = styled(FormattedText)`
	width: 80%;
`;
const Bottom = styled.div`
	color: #385898;
	text-align: center;
	height: 3rem;

	button {
		font-weight: 600;
	}
`;

function TooltipContent() {
	return (
		<Container>
			<Top>
				<Bold>Thông báo</Bold>
				<ButtonText>Đánh dấu tất cả là đã đọc</ButtonText>
				<ButtonText>Cài đặt</ButtonText>
			</Top>
			<ul>
				{notifications.map((n) => (
					<ListItem onClick={() => {}}>
						<UserInfo>
							<Avatar src={n.image} alt='avatar' />
							<Body>{n.body}</Body>
							<Small>{n.date}</Small>
						</UserInfo>
					</ListItem>
				))}
			</ul>
			<Bottom>
				<ButtonText>Xem tất cả</ButtonText>
			</Bottom>
		</Container>
	);
}

const Child = forwardRef((props, ref) => {
	return <span ref={ref} {...props} />;
});
export default function NotificationTooltip({ children }) {
	return (
		<Tooltip
			content={<TooltipContent />}
			animation='shift-away'
			interactive
			placement='top-end'
		>
			<Child>{children}</Child>
		</Tooltip>
	);
}
