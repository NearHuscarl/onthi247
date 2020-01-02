import React from 'react';
import { H1, H2 } from '../components/Headings';
import StarRating from '../components/StarRating';
import { SizedBox, FormattedText } from '../components/Common';
import { courseDetailProps } from '../utilities/proptypes';
import { biologyTeacher } from '../data/teachers';
import TeacherDetail from '../components/TeacherDetail';
import FeatureBox from '../components/FeatureBox';
import styled from '../styles';

const Section = styled.section`
	font-size: 1.5rem;
	h2 {
		margin-bottom: 1rem;
	}
	& > :not(:last-child) {
		margin-bottom: 3.5rem;
	}
`;
const H1Small = styled(H1)`
	font-size: 2.5rem;
`;
const Summary = styled.div`
	& > :not(:last-child) {
		margin-bottom: 1rem;
	}
`;
const Stats = styled.div`
	display: flex;
	align-items: center;
`;

const Requirements = styled.div`
	ul {
		list-style: inside;

		li:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}
`;
const Paragraph = styled(FormattedText)`
	white-space: pre-line;
`;

export default function CourseDetailPageSummary({ course }) {
	return (
		<Section>
			<Summary>
				<H1Small>{course.title}</H1Small>
				<div>{course.description}</div>
				<Stats>
					<StarRating score={course.rating} maxScore={5} />
					<SizedBox width={1} />
					<span>{`${course.rating}/5 (${course.ratingCount} lượt đánh giá)`}</span>
					<SizedBox width={1} />
					<span>{`${course.students} lượt đăng ký học`}</span>
				</Stats>
				<Stats>
					<span>{`Giảng viên: ${course.teacher}`}</span>
					<SizedBox width={1} />
					<span>{`Lần cập nhật cuối: ${course.lastUpdate}`}</span>
				</Stats>
			</Summary>
			<FeatureBox features={course.features} />
			<Requirements>
				<H2>Yêu cầu</H2>
				<ul>
					{course.requirements.map((f, i) => {
						const key = i;
						return <li key={key}>{f}</li>;
					})}
				</ul>
			</Requirements>
			<div>
				<H2>Mô tả khóa học</H2>
				<Paragraph>{course.courseDescription}</Paragraph>
			</div>
			<TeacherDetail teacher={biologyTeacher} />
		</Section>
	);
}

CourseDetailPageSummary.propTypes = {
	course: courseDetailProps.isRequired,
};
