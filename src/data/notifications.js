import sample from 'lodash/sample';
import users from './users';
import logo from '../../public/images/logo.png';

const usersWithoutDung = users.filter((u) => u.id !== 'dung');
const randomUser = () => sample(usersWithoutDung);

const user1 = randomUser();
const user2 = randomUser();

const notifications = [
	{
		image: user1.avatar,
		body: `[${user1.id}] đã trả lời câu hỏi của bạn`,
		date: '20 phút trước',
	},
	{
		image: user2.avatar,
		body: `[${user2.id}] đã trả lời câu hỏi của bạn`,
		date: '21 phút trước',
	},
	{
		image: logo,
		body: '[OnThi247] giảm giá 50% tất cả khóa học chỉ 2 ngày 01/11 và 02/11/2019',
		date: '5 ngày trước',
	},
];

export default notifications;
