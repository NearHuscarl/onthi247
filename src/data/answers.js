import users from './users';
import { randomDateFromNow } from '../utilities/random';

const randomDateInDay = () =>
	randomDateFromNow({ dayStart: -2, dayEnd: 0 }).toISOString();

const answers = [
	{
		votes: 0,
		description:
			'Em ép cho y(1)=0 nha: 1^3 -3m.1^2 +(2m+1).1 - 2 = 0 => m. Sau đó thử lại.',
		accepted: true,
		user: users[0],
		date: randomDateInDay(),
		comments: [
			{
				content: 'Dạ em cảm ơn anh (chị) nhiều ạ - ',
				user: users[2],
				date: randomDateInDay(),
			},
		],
	},
	{
		votes: 2,
		description:
			'Bài này trong video chuyên đề tìm cực trị có giải rồi. Bạn xem lại nhé!',
		accepted: false,
		user: users[1],
		date: randomDateInDay(),
		comments: [
			{
				content: 'Do mình không biết, cảm ơn bạn -',
				user: users[2],
				date: randomDateInDay(),
			},
			{
				content: '@nguoidung Không có gì nha bạn ^_^ -',
				user: users[1],
				date: randomDateInDay(),
			},
		],
	},
];

export default answers;