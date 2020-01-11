import * as profile from './users';
import { randomBetweenInt } from '../utilities/random';

const randomRating = () => randomBetweenInt(0, 5);
const randomDate = () => `${randomBetweenInt(1, 29)} ngày trước`;

const review = {
	rating: randomRating(),
	totalReview: 3569,
	ratio: {
		one: 0.04,
		two: 0.08,
		three: 0.18,
		four: 0.26,
		five: 0.56,
	},
	reviews: [
		{
			avatar: profile.elon,
			name: 'elon musk',
			rating: randomRating(),
			date: randomDate(),
			review:
				'Thật may mắn vì em đã biết tới thầy và học thầy môn Sinh. Thầy đã cung cấp cho em những kiến thức còn trống, các phương pháp tính nhanh. Em đã tuân theo lộ trình học của thầy và kỳ thi đại học rồi e đạt 9 điểm sinh ạ. Em cảm ơn thầy nhiều lắm - Thầy giáo tâm huyết nhất mà em biết.',
		},
		{
			name: 'near',
			avatar: profile.near,
			rating: randomRating(),
			date: randomDate(),
			review:
				'Nhờ học môn sinh của thầy mà e khá lên rất nhiều ạ. Nhờ sự tâm huyết và tận tâm của thầy mà em đã đỗ đại học y rồi ạ. Em cảm ơn thầy, chúc thầy sức khỏe và thành công trong cuộc sống ạ! ',
		},
		{
			name: 'snowflake chihuahua',
			avatar: profile.chihuahua,
			rating: randomRating(),
			date: randomDate(),
			review: 'Thầy là người truyền cảm hứng cho em rất nhiều đấy ạ ^^',
		},
		{
			name: 'mia khafila',
			avatar: profile.miaKhafila,
			rating: randomRating(),
			date: randomDate(),
			review: 'Thầy là người truyền cảm hứng cho em ít đấy ạ',
		},
		{
			name: 'no face',
			avatar: profile.noface,
			rating: randomRating(),
			date: randomDate(),
			review: 'Thầy là người truyền cảm hứng cho em vừa vừa đấy ạ',
		},
	],
};

export default review;
