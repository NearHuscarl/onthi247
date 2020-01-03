import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Input, { InputGroup } from '../components/Input';
import Button, { ButtonText } from '../components/Buttons';
import Selector from '../components/Selector';
import { Main, Container, Heading, SubHeading, InputHint } from './LoginPage';
import authImage from '../../public/images/auth.png';
import styled from '../styles';
import provinces from '../data/provinces';
import schools from '../data/schools';

const provinceOptions = provinces.map((p) => ({
	label: p,
	value: p,
}));
const schoolOptions = schools.map((s) => ({
	label: s,
	value: s,
}));

const Select = styled(Selector)`
	text-align: left;
`;

export default function RegisterPage() {
	const history = useHistory();
	const [province, setProvince] = React.useState(provinceOptions[0]);
	const [school, setSchool] = React.useState(schoolOptions[0]);

	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.register]} />
			<Container>
				<img src={authImage} alt='auth' />
				<Heading>Đăng ký tài khoản</Heading>
				<SubHeading>
					Để có thể sử dụng những chức năng chỉ có tại OnThi247
				</SubHeading>
				<InputHint>Tên đăng nhập</InputHint>
				<InputGroup>
					<Input placeholder='Tên đăng nhập của bạn' />
				</InputGroup>
				<InputHint>Họ và tên đầy đủ</InputHint>
				<InputGroup>
					<Input placeholder='Họ và tên đầy đủ của bạn' />
				</InputGroup>
				<InputHint>Địa chỉ email</InputHint>
				<InputGroup>
					<Input placeholder='Địa chỉ email của bạn' />
				</InputGroup>
				<InputHint>Tỉnh/Thành phố</InputHint>
				<Select
					value={province}
					onChange={(value) => setProvince(() => value)}
					options={provinceOptions}
				/>
				<InputHint>Trường</InputHint>
				<Select
					value={school}
					onChange={(value) => setSchool(() => value)}
					options={schoolOptions}
				/>
				<InputHint>Mật khẩu</InputHint>
				<InputGroup>
					<Input type='password' placeholder='Mật khẩu của bạn' />
				</InputGroup>
				<InputHint>Xác nhận lại mật khẩu</InputHint>
				<InputGroup>
					<Input
						type='password'
						placeholder='Xác nhận lại mật khẩu mới của bạn'
					/>
				</InputGroup>
				<Button
					className='submit'
					type='button'
					onClick={() => history.push(routes.home.path)}
				>
					Đăng ký
				</Button>
				<div>
					<span>Đã có tài khoản? </span>
					<ButtonText
						className='register'
						type='button'
						onClick={() => history.push(routes.login.path)}
					>
						Đăng nhập
					</ButtonText>
					<span> ngay</span>
				</div>
			</Container>
		</Main>
	);
}
