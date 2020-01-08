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
	profile: {
		name: 'Tài khoản',
		path: '/profile',
	},
	notification: {
		name: 'Thông báo của bạn',
		path: '/notifications',
	},
	home: {
		name: 'Trang chủ',
		path: '/',
	},
	intro: {
		name: 'Giới thiệu',
		path: '/intro',
	},
	courses: {
		name: 'Khóa học',
		path: '/courses',
	},
	teacher: {
		name: 'Giáo viên',
		path: '/teachers',
	},
	cart: {
		name: 'Giỏ hàng của bạn',
		path: '/cart',
	},
	checkout: {
		name: 'Thanh toán đơn hàng',
		path: '/checkout',
	},
	standing: {
		name: 'Bảng xếp hạng',
		path: '/standing',
	},
	exercise: {
		name: 'Bài tập',
		path: '/exercises',
	},
	exam: {
		name: 'Đề thi thử',
		path: '/exams',
	},
	document: {
		name: 'Tài liệu',
		path: '/documents',
	},
};

export default routes;
