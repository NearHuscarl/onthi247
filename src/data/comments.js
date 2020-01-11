import { user } from './users';

const commenter = user('chihuahua');
const commenter2 = user('near');

const comments = [
	{
		avatar: commenter.avatar,
		user: commenter.name,
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		replies: [
			{
				avatar: commenter2.avatar,
				user: commenter2.name,
				date: '31 phút trước',
				content: 'Lời giải không hết sức thuyết phục',
				isReply: true,
			},
			{
				avatar: commenter2.avatar,
				user: commenter2.name,
				date: '33 phút trước',
				content: ' ',
				isReply: true,
			},
		],
	},
	{
		avatar: commenter.avatar,
		user: commenter.name,
		date: '35 phút trước',
		content: 'lorem islum',
		replies: [],
	},
];

export default comments;
