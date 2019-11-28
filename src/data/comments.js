import * as profile from './users';

const comments = [
	{
		avatar: profile.plain,
		user: 'bé dủng',
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		replies: [
			{
				avatar: profile.bitching,
				user: 'bé bi',
				date: '31 phút trước',
				content: 'Lời giải không hết sức thuyết phục',
				isReply: true,
			},
			{
				avatar: profile.bitching,
				user: 'bé bi',
				date: '33 phút trước',
				content: 'Anh yêu em Ung Như Cát Huỳnh',
				isReply: true,
			},
		],
	},
	{
		avatar: profile.plain,
		user: 'bé dủng',
		date: '35 phút trước',
		content: 'lorem islum',
		replies: [],
	},
];

export default comments;
