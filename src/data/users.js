import sample from 'lodash/sample';
import plain from '../../public/images/profile.png';
import bitching from '../../public/images/profile-bitchin.jpg';
import donaldTrump from '../../public/images/profile-donald-trump.png';
import elon from '../../public/images/profile-elon-musk.png';
import eo from '../../public/images/profile-l.png';
import ladyGaga from '../../public/images/profile-lady-gaga.png';
import miaKhafila from '../../public/images/profile-mia-khafila.png';
import noface from '../../public/images/profile-no-face.png';
import pepe from '../../public/images/profile-pepe.jpg';
import thanos from '../../public/images/profile-thanos.png';
import provinces from './provinces';
import schools from './schools';

const randomProvince = () => sample(provinces);
const randomSchool = () => sample(schools);

const users = [
	{
		id: 'L',
		name: 'L',
		level: 0,
		avatar: eo,
		email: 'eo@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'elon_musk',
		name: 'elon musk',
		level: 143,
		avatar: elon,
		email: 'elon@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'bebi',
		name: 'bé bi',
		level: 100,
		avatar: bitching,
		email: 'bitching@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'dung',
		name: 'bé dủng',
		level: 69,
		avatar: plain,
		email: 'plain@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'gaga',
		name: 'gaga',
		level: 0,
		avatar: ladyGaga,
		email: 'ladyGaga@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'pepe',
		name: 'pepe',
		level: 0,
		avatar: pepe,
		email: 'pepe@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'mia_khafila',
		name: 'mia khafila',
		level: 54,
		avatar: miaKhafila,
		email: 'miaKhafila@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'thanos',
		name: 'thanos',
		level: 0,
		avatar: thanos,
		email: 'thanos@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'no_face',
		name: 'no face',
		level: 17,
		avatar: noface,
		email: 'noface@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
	{
		id: 'real_donald',
		name: 'real donald-trum',
		level: 0,
		avatar: donaldTrump,
		email: 'donaldTrump@gmail.com',
		school: randomSchool(),
		province: randomProvince(),
	},
];

export const userDetail = (id) => ({
	...users.find((u) => u.id === id),
	birthday: '20/01/2002',
	registerDate: '18/05/2019, 10:00',
})

export {
	plain,
	bitching,
	donaldTrump,
	elon,
	eo,
	ladyGaga,
	miaKhafila,
	noface,
	pepe,
	thanos,
};

export default users;
