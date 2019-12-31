/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../components/Logo';
import {
	FacebookButton,
	YoutubeButton,
	TwitterButton,
	ButtonLink,
} from '../components/Buttons';
import { H4 } from '../components/Headings';
import googlePlay from '../../public/images/google-play.png';
import appStore from '../../public/images/app-store.png';
import styled, { appColors, theme, mixins } from '../styles';

const FooterTop = styled.div`
	margin: 0 auto;
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
const TopLink = styled(ButtonLink)`
	/* fix ButtonLink underline span 100% block width */
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
					<H4>Về OnThi247</H4>
					<ul>
						<li>
							<TopLink>
								Giới thiệu
							</TopLink>
						</li>
						<li>
							<TopLink>
								Giáo viên nổi tiếng
							</TopLink>
						</li>
						<li>
							<TopLink>
								Điều khoản sử dụng
							</TopLink>
						</li>
						<li>
							<TopLink>
								Quy chế hoạt động
							</TopLink>
						</li>
						<li>
							<TopLink>
								Chính sách bảo mật
							</TopLink>
						</li>
						<li>
							<TopLink>
								Tuyển dụng
							</TopLink>
						</li>
					</ul>
				</div>
				<div>
					<H4>Dịch vụ</H4>
					<ul>
						<li>
							<TopLink>
								Kho bài tập
							</TopLink>
						</li>
						<li>
							<TopLink>
								Kho đề thi thử
							</TopLink>
						</li>
						<li>
							<TopLink>
								Kho tài liệu
							</TopLink>
						</li>
						<li>
							<TopLink>
								Hỏi đáp
							</TopLink>
						</li>
					</ul>
				</div>
				<div>
					<div className='mb-md'>
						<H4>Hỗ trợ khách hàng</H4>
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
						<H4>Dành cho đối tác</H4>
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
					<H4>Tải ứng dụng OnThi247</H4>
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
					<FacebookButton />
					<YoutubeButton />
					<TwitterButton />
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
