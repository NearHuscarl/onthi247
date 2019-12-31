import React from 'react';
import { H3 } from '../components/Headings';
import CommentSection from '../components/CommentSection';
import { Bold } from '../components/Common';
import styled from '../styles';
import { biologyTeacher } from '../data/teachers';

const Header = styled.div`
	display: flex;
	align-items: center;
`;
const Avatar = styled.img`
	width: 5rem;
	height: 5rem;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 1.5rem;
`;
const Body = styled.div`
	margin: 2.5rem 0;
`;
const Heading3 = styled(H3)`
    margin-bottom: 1.8rem;
`;

function Post() {
	return (
		<article>
			<Header>
				<Avatar src={biologyTeacher.image} alt='teacher' />
				<div>
					<Bold>{biologyTeacher.name}</Bold>
					<div>Đã đăng 1 tháng trước</div>
				</div>
			</Header>
			<Body>
				<div>Chào các em!</div>
				<br />
				<div>
					Hy vọng với bài giảng đầu tiên này các em sẽ có được cái nhìn
					tổng quan nhất về nội dung của khóa học này nhé! Chúc các em học
					tập tốt! Thầy Thịnh Nam
				</div>
				<br />
				<em>Thầy Thịnh Nam</em>
			</Body>
		</article>
	);
}

export default function CourseDetailPageAnnouncement() {
	return (
		<section>
			<Post />
			<Heading3>Bình luận</Heading3>
			<CommentSection />
		</section>
	);
}
