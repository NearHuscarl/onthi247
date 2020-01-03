const routes = {
	register: {
		name: 'Đăng ký tài khoản',
		path: '/register',
	},
	login: {
		name: 'Đăng nhập tài khoản',
		path: '/login',
	},
	forgotPassword: {
		name: 'Quên mật khẩu',
		path: '/forgot-password',
	},
	changePassword: {
		name: 'Thay đổi mật khẩu',
		path: '/change-password',
	},
	home: {
		name: 'Trang chủ',
		path: '/',
	},
	courses: {
		name: 'Khóa học',
		path: '/courses',
	},
	cart: {
		name: 'Giỏ hàng của bạn',
		path: '/cart',
	},
	checkout: {
		name: 'Thanh toán đơn hàng',
		path: '/checkout',
	},
};

export default routes;
