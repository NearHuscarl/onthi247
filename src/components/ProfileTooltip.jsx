import React, { forwardRef } from 'react';
import users from '../data/users';
import { Bold, Line } from './Common';
import { ButtonText } from './Buttons';
import Tooltip from './Tooltip';
import styled, { appColors } from '../styles';

const Content = styled.div`
	li {
		line-height: 1.8;
	}
`;
const Divider = styled(Line)`
	min-width: 20rem;
`;
const Small = styled.div`
	font-size: 1.1rem;
	color: ${appColors.greyDark1};
`;
const UserInfo = styled.div`
	display: grid;
	grid-template-columns: min-content max-content;
	grid-template-rows: repeat(2, max-content);
	column-gap: 1rem;
	margin-bottom: 1.2rem;
`;
const Avatar = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	grid-row: 1 / -1;
`;

function TooltipContent() {
	const user = users[3];
	return (
		<Content>
			<UserInfo>
				<Avatar src={user.avatar} alt='avatar' />
				<Bold>{user.name}</Bold>
				<Small>{user.email}</Small>
			</UserInfo>
			<ul>
				<li>
					<ButtonText>Khóa học của tôi</ButtonText>
				</li>
				<Divider />
				<li>
					<ButtonText>Khóa học yêu thích</ButtonText>
				</li>
				<li>
					<ButtonText>Bài tập yêu thích</ButtonText>
				</li>
				<li>
					<ButtonText>Đề thi thử yêu thích</ButtonText>
				</li>
				<li>
					<ButtonText>Tài liệu yêu thích</ButtonText>
				</li>
				<li>
					<ButtonText>Câu hỏi yêu thích</ButtonText>
				</li>
				<Divider />
				<li>
					<ButtonText>Quản lý tài khoản</ButtonText>
				</li>
				<Divider />
				<li>
					<ButtonText>Trợ giúp</ButtonText>
				</li>
				<li>
					<ButtonText>Đăng xuất</ButtonText>
				</li>
			</ul>
		</Content>
	);
}

const ThisWillWork = forwardRef((props, ref) => {
	return <span ref={ref} {...props} />;
});
export default function ProfileTooltip({ children }) {
	return (
		<Tooltip
			content={<TooltipContent />}
			animation='shift-away'
			interactive
			placement='top-end'
		>
			<ThisWillWork>{children}</ThisWillWork>
		</Tooltip>
	);
}
