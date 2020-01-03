import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import Input, { InputGroup } from '../components/Input';
import Button from '../components/Buttons';
import { Main, Container, Heading, SubHeading, InputHint } from './LoginPage';
import authImage from '../../public/images/auth.png';

export default function ChangePasswordPage() {
	const history = useHistory();
	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.changePassword]} />
			<Container>
				<img src={authImage} alt='auth' />
				<Heading>Thay đổi mật khẩu</Heading>
				<SubHeading>Thay đổi lại mật khẩu của tài khoản</SubHeading>
				<InputHint>Mật khẩu cũ</InputHint>
				<InputGroup>
					<Input type='password' placeholder='Mật khẩu cũ của tài khoản' />
				</InputGroup>
				<InputHint>Mật khẩu mới</InputHint>
				<InputGroup>
					<Input
						type='password'
						placeholder='Mật khẩu mới của tài khoản'
					/>
				</InputGroup>
				<InputHint>Xác nhận mật khẩu mới</InputHint>
				<InputGroup>
					<Input
						type='password'
						placeholder='Xác nhận mật khẩu mới của tài khoản'
					/>
				</InputGroup>
				<Button
					className='submit'
					type='button'
					onClick={() => history.push(routes.home.path)}
				>
					Thay đổi mật khẩu
				</Button>
			</Container>
		</Main>
	);
}
