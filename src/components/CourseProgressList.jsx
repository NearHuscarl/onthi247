import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import {
	faChevronDown,
	faChevronUp,
	faPlayCircle,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonText } from './Buttons';
import { Checkbox } from './Common';
import { H4 } from './Headings';
import styled, { appColors } from '../styles';
import { courseSummary } from '../utilities/proptypes';

const ListItemContent = styled.div`
	border: 1px solid ${appColors.greyLight3};
	border-top: none;
	padding: 1.5rem;
	display: flex;
`;
const ListItemChild = styled.span`
	margin-right: auto;
`;
const ListItemInner = styled.div`
	border: 1px solid ${appColors.greyLight3};
	border-top: none;
`;

function FoldableListItem({ children, foldedContent, startOpen }) {
	const [isOpen, setIsOpen] = React.useState(startOpen);

	return (
		<li>
			<Collapsible
				transitionTime={250}
				easing='ease'
				open={startOpen}
				onOpening={() => setIsOpen(true)}
				onClosing={() => setIsOpen(false)}
				trigger={
					<ListItemContent>
						<ListItemChild>{children}</ListItemChild>
						<ButtonText type='button'>
							{isOpen ? (
								<FontAwesomeIcon icon={faChevronUp} />
							) : (
								<FontAwesomeIcon icon={faChevronDown} />
							)}
						</ButtonText>
					</ListItemContent>
				}
			>
				<ListItemInner>{foldedContent}</ListItemInner>
			</Collapsible>
		</li>
	);
}

FoldableListItem.propTypes = {
	children: PropTypes.node.isRequired,
	foldedContent: PropTypes.node.isRequired,
	startOpen: PropTypes.bool,
};

FoldableListItem.defaultProps = {
	startOpen: false,
};

const FoldedContent = styled.li`
	padding: 0.75rem 1.5rem;
	padding-left: calc((1.5rem - 0.9rem));
`;
const Title = styled.div`
	display: flex;
	align-items: center;
`;

const Length = styled.span`
	[class*='fa'] {
		margin-right: 0.5rem;
	}

	margin-left: 3rem;
	font-size: 1.2rem;
`;

function getFoldedContentComponent(content) {
	return (
		<ul>
			{content.map((c, i) => {
				const key = i;
				return (
					<FoldedContent key={key}>
						<Title>
							<Checkbox />
							{c.title}
						</Title>
						<Length>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>{c.length}</span>
						</Length>
					</FoldedContent>
				);
			})}
		</ul>
	);
}

const ListHeader = styled(ListItemContent)`
	h4 {
		margin: 0;
		margin-right: auto;
	}
`;
const List = styled.ul`
	h4 {
		margin: 0;
		margin-right: 3rem;
	}
`;
const Stats = styled.div`
	font-size: 1.2rem;
`;

const Container = styled.div`
	background-color: ${appColors.white};
`;

export default function CourseProgressList({ courseProgress }) {
	return (
		<Container>
			<ListHeader>
				<H4>Nội dung khóa học</H4>
				<FontAwesomeIcon icon={faTimes} />
			</ListHeader>
			<List>
				{courseProgress.map((c, i) => {
					const key = i + 1;
					return (
						<FoldableListItem
							key={key}
							startOpen={i === 0}
							foldedContent={getFoldedContentComponent(c.videos)}
						>
							<H4>{c.title}</H4>
							<Stats>
								<span>{`0/${c.videos.length} | ${c.length}`}</span>
							</Stats>
						</FoldableListItem>
					);
				})}
			</List>
		</Container>
	);
}

CourseProgressList.propTypes = {
	courseProgress: courseSummary.isRequired,
};
