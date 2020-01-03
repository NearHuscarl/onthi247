import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Input, { InputGroup } from '../components/Input';
import Button from '../components/Buttons';
import { Main, Container, Heading, SubHeading, InputHint } from './LoginPage';
import authImage from '../../public/images/auth.png';

export default function ForgotPasswordPage() {
	const history = useHistory();
	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.forgotPassword]} />
			<Container>
				<img src={authImage} alt='auth' />
				<Heading>Quên mật khẩu</Heading>
				<SubHeading>Gửi email xác nhận khôi phục lại mật khẩu</SubHeading>
				<InputHint>Địa chỉ email</InputHint>
				<InputGroup>
					<Input placeholder='Địa chỉ email của bạn' />
				</InputGroup>
				<Button
					className='submit'
					type='button'
					onClick={() => history.push(routes.changePassword.path)}
				>
					Gửi email xác nhận
				</Button>
			</Container>
		</Main>
	);
}
