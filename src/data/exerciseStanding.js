import users from './users';

const exerciseStanding = {
	exerciseId: '0001',
	standing: [
		{
			...users[0],
			rank: 1,
			score: 30,
			time: '6 phút 03 giây',
		},
		{
			...users[1],
			rank: 2,
			score: 30,
			time: '10 phút 30 giây',
		},
		{
			...users[2],
			rank: 3,
			score: 28,
			time: '12 phút 49 giây',
		},
		{
			...users[3],
			rank: 4,
			score: 28,
			time: '15 phút 33 giây',
		},
		{
			...users[4],
			rank: 5,
			score: 27,
			time: '14 phút 01 giây',
		},
		{
			...users[5],
			rank: 6,
			score: 25,
			time: '08 phút 52 giây',
		},
		{
			...users[6],
			rank: 7,
			score: 25,
			time: '18 phút 56 giây',
		},
		{
			...users[7],
			rank: 8,
			score: 23,
			time: '16 phút 12 giây',
		},
		{
			...users[8],
			rank: 9,
			score: 19,
			time: '09 phút 41 giây',
		},
		{
			...users[9],
			rank: 10,
			score: 6,
			time: '12 phút 20 giây',
		},
	],
};

export default exerciseStanding;
