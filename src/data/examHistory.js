import { randomBetweenInt } from '../utilities/random';

const randomTime = () =>
	`${randomBetweenInt(0, 59)} phút ${randomBetweenInt(0, 59)} giây`;
const randomScore = () => `${randomBetweenInt(0, 30)}/30`;

const examHistory = [
	{
		timeTaken: '15/10/2019, lúc 10:20:00',
		score: randomScore(),
		time: randomTime(),
	},
	{
		timeTaken: '14/10/2019, lúc 08:51:00',
		score: randomScore(),
		time: randomTime(),
	},
];

export default examHistory;
