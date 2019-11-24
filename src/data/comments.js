import * as profile from './avatars';

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
				content: 'lorem islum',
				isReply: true,
			},
		],
	},
	{
		avatar: profile.plain,
		user: 'bé dủng',
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		replies: [],
	},
	{
		avatar: profile.plain,
		user: 'bé dủng',
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		replies: [
			{
				avatar: profile.plain,
				user: 'bé dủng',
				date: '30 phút trước',
				content: 'Lời giải hết sức thuyết phục',
				replies: [],
			},
		],
	},
];

export default comments;
