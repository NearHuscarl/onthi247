/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
	faFacebookF,
	faYoutube,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../components/Logo';
import googlePlay from '../../public/images/google-play.png';
import appStore from '../../public/images/app-store.png';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-top'>
				<Logo small className='footer-top__logo' />
				<div className='footer-top__about'>
					<h4 className='h4'>Về OnThi247</h4>
					<ul>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Giới thiệu
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Giáo viên nổi tiếng
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Điều khoản sử dụng
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Quy chế hoạt động
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Chính sách bảo mật
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Tuyển dụng
							</a>
						</li>
					</ul>
				</div>
				<div className='footer-top__service'>
					<h4 className='h4'>Dịch vụ</h4>
					<ul>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Kho bài tập
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Kho đề thi thử
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Kho tài liệu
							</a>
						</li>
						<li>
							<a href='#' className='footer-top__link btn-link'>
								Hỏi đáp
							</a>
						</li>
					</ul>
				</div>
				<div className='footer-top__client'>
					<div className='footer-top__support mb-md'>
						<h4 className='h4'>Hỗ trợ khách hàng</h4>
						<ul>
							<li>Trung tâm hỗ trợ</li>
							<li>
								<span className='bold'>Email</span>: hotro@onthi247.vn
							</li>
							<li>
								<span className='bold'>Hotline</span>: 1900-0000
							</li>
						</ul>
					</div>
					<div className='footer-top__contact'>
						<h4 className='h4'>Dành cho đối tác</h4>
						<ul>
							<li>
								<span className='bold'>Email</span>: info@onthi247.vn
							</li>
							<li>
								<span className='bold'>Tel</span>: +84 (00) 0000-0000
							</li>
							<li>
								<span className='bold'>Fax</span>: +84 (00) 0000-0000
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-top__app'>
					<h4 className='h4'>Tải ứng dụng OnThi247</h4>
					<a href='#'>
						<img
							className='applink-img mb-sm'
							src={googlePlay}
							alt='google play'
						/>
					</a>
					<a href='#'>
						<img className='applink-img' src={appStore} alt='app store' />
					</a>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='footer-bottom__medias'>
					<button type='button' className='btn-facebook'>
						<FontAwesomeIcon icon={faFacebookF} />
					</button>
					<button type='button' className='btn-youtube'>
						<FontAwesomeIcon icon={faYoutube} />
					</button>
					<button type='button' className='btn-twitter'>
						<FontAwesomeIcon icon={faTwitter} />
					</button>
				</div>
				<div className='footer-bottom__copyright'>
					© 2019 - Bản quyền website thuộc về OnThi247.vn
				</div>
				<div className='footer-bottom__license'>
					<p>
						Giấy phép cung cấp dịch vụ mạng xã hội trực tuyến số
						000/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
						02/09/2019
					</p>
					<p>
						Giấy phép kinh doanh giáo dục: MST-0000000000 do Sở Kế hoạch
						và Đầu tư cấp ngày 02/09/2019
					</p>
				</div>
			</div>
		</footer>
	);
}
