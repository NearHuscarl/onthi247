/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {
	faFacebookF,
	faYoutube,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../components/Logo';
import googlePlay from '../../public/images/google-play.png';
import appStore from '../../public/images/app-store.png';
import { appColors, theme, mixins } from '../constants';

const FooterTop = styled.div`
	margin: 0 auto;
	margin-top: 7.3rem;
	padding: 4.8rem calc(((100vw - ${theme.pageContainerWidth}) / 2));
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	row-gap: 1.5rem;

	background-color: ${appColors.greyLight1};

	h4 {
		margin-bottom: 1rem;
	}

	li:not(:last-child) {
		margin-bottom: 0.75rem;
	}
`;

const TopLogo = styled(Logo)`
	grid-column: 1 / -1;
`;
const TopLink = styled.a`
	// fix .btn-link underline span 100% block width
	display: inline-flex;
	color: ${theme.fontColor};
`;
const TopAppImage = styled.img`
	width: 18rem;
	transition: box-shadow 0.2s, transform 0.2s;

	&:hover {
		box-shadow: ${theme.shadowLight};
		${mixins.applyScale('transform: scale(1.048);')}
	}
`;

const FooterBottom = styled.div`
	padding: 4rem;
	background-color: ${appColors.secondary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
const BottomMedias = styled.div`
	display: grid;
	grid-template-columns: repeat(3, min-content);
	justify-content: center;
	gap: 1rem;

	width: 100%;
	margin-bottom: 1.9rem;
`;
const BottomCopyright = styled.div`
	font-size: 1rem;
	margin-bottom: 0.9rem;
`;
const BottomLicense = styled.div`
	line-height: 0.25;
	font-size: 0.8rem;
`;

export default function Footer() {
	return (
		<footer>
			<FooterTop>
				<TopLogo small />
				<div>
					<h4 className='h4'>Về OnThi247</h4>
					<ul>
						<li>
							<TopLink href='#' className='btn-link'>
								Giới thiệu
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Giáo viên nổi tiếng
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Điều khoản sử dụng
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Quy chế hoạt động
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Chính sách bảo mật
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Tuyển dụng
							</TopLink>
						</li>
					</ul>
				</div>
				<div>
					<h4 className='h4'>Dịch vụ</h4>
					<ul>
						<li>
							<TopLink href='#' className='btn-link'>
								Kho bài tập
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Kho đề thi thử
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Kho tài liệu
							</TopLink>
						</li>
						<li>
							<TopLink href='#' className='btn-link'>
								Hỏi đáp
							</TopLink>
						</li>
					</ul>
				</div>
				<div>
					<div className='mb-md'>
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
					<div>
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
				<div>
					<h4 className='h4'>Tải ứng dụng OnThi247</h4>
					<a href='#'>
						<TopAppImage
							className='mb-sm'
							src={googlePlay}
							alt='google play'
						/>
					</a>
					<a href='#'>
						<TopAppImage src={appStore} alt='app store' />
					</a>
				</div>
			</FooterTop>
			<FooterBottom>
				<BottomMedias>
					<button type='button' className='btn-facebook'>
						<FontAwesomeIcon icon={faFacebookF} />
					</button>
					<button type='button' className='btn-youtube'>
						<FontAwesomeIcon icon={faYoutube} />
					</button>
					<button type='button' className='btn-twitter'>
						<FontAwesomeIcon icon={faTwitter} />
					</button>
				</BottomMedias>
				<BottomCopyright>
					© 2019 - Bản quyền website thuộc về OnThi247.vn
				</BottomCopyright>
				<BottomLicense>
					<p>
						Giấy phép cung cấp dịch vụ mạng xã hội trực tuyến số
						000/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
						02/09/2019
					</p>
					<p>
						Giấy phép kinh doanh giáo dục: MST-0000000000 do Sở Kế hoạch
						và Đầu tư cấp ngày 02/09/2019
					</p>
				</BottomLicense>
			</FooterBottom>
		</footer>
	);
}
