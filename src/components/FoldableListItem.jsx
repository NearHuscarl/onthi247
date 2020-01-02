import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import {
	faChevronDown,
	faChevronUp,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonText } from './Buttons';
import styled, { appColors } from '../styles';

const transitionTime = 250;
const easing = 'ease';

const ListItem = styled.li`
	border: 1px solid ${appColors.greyLight3};

	&:not(:first-child) {
		border-top: none;
	}
`;
export const ListItemVisible = styled.div`
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;
const ListItemChild = styled.span`
	margin-right: auto;

	& + button {
		align-self: start;
	}
`;
const ListItemInner = styled.div`
	li:first-child {
		border-top: 1px solid ${appColors.greyLight3};
	}
`;

export default function FoldableListItem({
	children,
	foldedContent,
	startOpen,
}) {
	const [isOpen, setIsOpen] = React.useState(startOpen);

	return (
		<ListItem>
			<Collapsible
				transitionTime={transitionTime}
				easing={easing}
				open={startOpen}
				onOpening={() => setIsOpen(true)}
				onClosing={() => setIsOpen(false)}
				trigger={
					<ListItemVisible>
						<ListItemChild>{children}</ListItemChild>
						<ButtonText type='button'>
							{isOpen ? (
								<FontAwesomeIcon icon={faChevronUp} />
							) : (
								<FontAwesomeIcon icon={faChevronDown} />
							)}
						</ButtonText>
					</ListItemVisible>
				}
			>
				<ListItemInner>{foldedContent}</ListItemInner>
			</Collapsible>
		</ListItem>
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

const UdemyListItemChild = styled.span`
	margin-left: 1.25rem;
    width: 100%;
`;
const UdemyListItemInner = styled.div`
	li {
		border-top: 1px solid ${appColors.greyLight3};
	}
`;

export function UdemyFoldableListItem({ className, children, foldedContent, startOpen }) {
	const [isOpen, setIsOpen] = React.useState(startOpen);

	return (
		<ListItem>
			<Collapsible
				transitionTime={transitionTime}
				easing={easing}
				open={startOpen}
				onOpening={() => setIsOpen(true)}
				onClosing={() => setIsOpen(false)}
				trigger={
					<ListItemVisible>
						<ButtonText type='button'>
							{isOpen ? (
								<FontAwesomeIcon icon={faMinus} size='xs' />
							) : (
								<FontAwesomeIcon icon={faPlus} size='xs' />
							)}
						</ButtonText>
						<UdemyListItemChild className={className}>{children}</UdemyListItemChild>
					</ListItemVisible>
				}
			>
				<UdemyListItemInner>{foldedContent}</UdemyListItemInner>
			</Collapsible>
		</ListItem>
	);
}

UdemyFoldableListItem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	foldedContent: PropTypes.node.isRequired,
	startOpen: PropTypes.bool,
};

UdemyFoldableListItem.defaultProps = {
	className: '',
	startOpen: false,
};
