import React from 'react';
import { H2, H4 } from './Headings';
import { Bold } from './Common';
import {
	FacebookButton,
	TwitterButton,
	YoutubeButton,
	GoogleButton,
} from './Buttons';
import { teacherProps } from '../utilities/proptypes';
import styled, { appColors } from '../styles';

const Container = styled.div`
	display: flex;
`;
const ColLeft = styled.div`
	flex: 0 0 19rem;
	padding-right: 3rem;
`;
const ColRight = styled.div`
	flex: 1 0;
`;

const Avatar = styled.img`
	width: 9.5rem;
	height: 9.5rem;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 1rem;
`;
const BioListItem = styled.li`
	margin-bottom: 0.75rem;
`;
const Name = styled(H4)`
	font-size: 1.6rem;
	color: ${appColors.blue};
`;
const Summary = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Media = styled.div`
	display: grid;
	column-gap: 1rem;
	grid-template-columns: repeat(4, 1fr);
`;
const Paragraph = styled.div`
	margin-top: 1rem;
	white-space: pre-line;
	line-height: 1.7;
`;

function getBioListItem(bioItem) {
	return bioItem.split(/(\[.*\])/).map((p, i) => {
		const key = i;
		if (p.startsWith('[')) {
			return <Bold key={key} as='span'>{p.replace(/[[\]]/g, '')}</Bold>;
		}
		return <span key={key}>{p}</span>;
	});
}

export default function TeacherDetail({ teacher }) {
	return (
		<>
			<H2>Giới thiệu về giáo viên</H2>
			<Container>
				<ColLeft>
					<Avatar src={teacher.image} alt='teacher' />
					<ul>
						{teacher.bio.map((b, i) => {
							const key = i;
							return (
								<BioListItem key={key}>{getBioListItem(b)}</BioListItem>
							);
						})}
					</ul>
				</ColLeft>
				<ColRight>
					<Summary>
						<div>
							<Name>{teacher.name}</Name>
							<Bold>{teacher.role}</Bold>
						</div>
						<Media>
							<FacebookButton />
							<YoutubeButton />
							<GoogleButton />
							<TwitterButton />
						</Media>
					</Summary>
					<Paragraph>{teacher.description}</Paragraph>
				</ColRight>
			</Container>
		</>
	);
}

TeacherDetail.propTypes = {
	teacher: teacherProps.isRequired,
};
