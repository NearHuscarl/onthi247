import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { H1, H2 } from '../components/Headings';
import StarRating from '../components/StarRating';
import { SizedBox, Bold } from '../components/Common';
import { courseDetailProps } from '../utilities/proptypes';
import { biologyTeacher } from '../data/teachers';
import TeacherDetail from '../components/TeacherDetail';
import styled, { appColors } from '../styles';

const H1Small = styled(H1)`
	font-size: 2.5rem;
`;
const Section = styled.section`
	h2 {
		margin-bottom: 1rem;
	}
	& > :not(:last-child) {
		margin-bottom: 3.5rem;
	}
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

const Box = styled.div`
	background-color: ${appColors.greyLight1};
	border: solid 1px #dedfe0;
	margin: 2rem 0;
	padding: 1.8rem 2.1rem;
`;

const Features = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 4.4rem;
	row-gap: 1.6rem;
	/* reset bs reboot */
	margin-bottom: 0;
`;

const Requirements = styled.div`
	ul {
		list-style: inside;

		li:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}
`;
const Paragraph = styled.div`
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
			<Box>
				<H2>Bạn sẽ được học những gì?</H2>
				<Features>
					{course.features.map((f) => (
						<li>
							<FontAwesomeIcon icon={faCheck} />
							<SizedBox width={0.5} />
							<span>{f}</span>
						</li>
					))}
				</Features>
			</Box>
			<Requirements>
				<H2>Yêu cầu</H2>
				<ul>
					{course.requirements.map((f) => (
						<li>{f}</li>
					))}
				</ul>
			</Requirements>
			<div>
				<H2>Mô tả khóa học</H2>
				<Paragraph>
					{course.courseDescription.split(/(\[.*\])/).map((p) => {
						if (p.startsWith('[')) {
							return <Bold as='span'>{p.replace(/[[\]]/g, '')}</Bold>;
						}
						return <span>{p}</span>;
					})}
				</Paragraph>
			</div>
			<TeacherDetail teacher={biologyTeacher} />
		</Section>
	);
}

CourseDetailPageSummary.propTypes = {
	course: courseDetailProps.isRequired,
};
