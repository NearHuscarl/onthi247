import profile from '../../public/images/profile.png';
import profile2 from '../../public/images/profile-bitchin.jpg';

const comments = [
	{
		avatar: profile,
		user: 'bé dủng',
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		replies: [
			{
				avatar: profile2,
				user: 'bé bi',
				date: '31 phút trước',
				content: 'Lời giải không hết sức thuyết phục',
				isReply: true,
			},
			{
				avatar: profile2,
				user: 'bé bi',
				date: '33 phút trước',
				content: 'lorem islum',
				isReply: true,
			},
		],
	},
	{
		avatar: profile,
		user: 'bé dủng',
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		replies: [],
	},
	{
		avatar: profile,
		user: 'bé dủng',
		date: '30 phút trước',
		content: 'Lời giải hết sức thuyết phục',
		replies: [
			{
				avatar: profile,
				user: 'bé dủng',
				date: '30 phút trước',
				content: 'Lời giải hết sức thuyết phục',
				replies: [],
			},
		],
	},
];

export default comments;
