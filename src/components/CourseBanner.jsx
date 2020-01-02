import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Button, { PrimaryWhiteButton } from './Buttons';
import { Bold, SizedBox } from './Common';
import { H4 } from './Headings';
import styled, { appColors, theme } from '../styles';
import { courseProps } from '../utilities/proptypes';

const Video = styled(VideoPlayer)`
	[alt='thumbnail'] {
		width: 28rem;
		height: 24rem;
	}
`;
const Banner = styled.div`
	box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1);
	border-bottom-left-radius: ${theme.borderRound};
	border-bottom-right-radius: ${theme.borderRound};

	& > :not(:first-child) {
		padding: 2rem 2.5rem;
	}

	.price {
		display: flex;
		align-items: center;
	}

	.discount {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}

	ul {
		margin-left: 1rem;
	}
`;
const Price = styled.span`
	color: ${appColors.red};
	margin-right: 1rem;
	font-weight: 600;
	font-size: 2.2rem;
`;

export default function CourseBanner({ course }) {
	return (
		<Banner>
			<Link to='/course/001'>
				<Video thumbnail={course.image} />
			</Link>
			<div>
				<div className='price'>
					<Price>{`${course.price.toLocaleString()}đ`}</Price>
					<strike>{`${course.originalPrice.toLocaleString()}đ`}</strike>
				</div>
				<div className='discount'>
					<span>Ưu đãi còn </span>
					<Bold as='span'>3 ngày </Bold>
					<span>nữa</span>
				</div>
				<Button type='button'>Thêm vào giỏ hàng</Button>
				<PrimaryWhiteButton type='button'>Mua ngay</PrimaryWhiteButton>
				<SizedBox height={1} />
				<div>
					<H4>Môn học</H4>
					<ul>
						<li>🢒 Sinh học</li>
					</ul>
					<H4>Ngày hết hạn</H4>
					<ul>
						<li>🢒 00:00, 30-06-2020</li>
					</ul>
					<H4>Khóa học bao gồm</H4>
					<ul>
						<li>🢒 24 giờ xem bài giảng</li>
						<li>🢒 18 bài viết</li>
						<li>🢒 20 bài tập trắc nghiệm</li>
					</ul>
				</div>
			</div>
		</Banner>
	);
}

CourseBanner.propTypes = {
	course: courseProps.isRequired,
};
