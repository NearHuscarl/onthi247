import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonText } from './Buttons';
import styled, { appColors, mixins } from '../styles';

export const Link = styled(RouterLink)`
	font-weight: 600;
	color: ${appColors.blue};
	transition: color .25s ease;

	&:hover,
	&:active,
	&:focus {
		color: ${mixins.lighten(appColors.blue)};
	}
`;

const SizedBoxContainer = styled.div`
	display: ${(props) => props.display || 'block'};
	height: ${(props) => props.height || '0'}rem;
	width: ${(props) => props.width || '0'}rem;
`;

export function SizedBox({ className, width, height }) {
	if (width !== 0) {
		return (
			<SizedBoxContainer
				width={width}
				height={height}
				display='inline-block'
				className={className}
			/>
		);
	}
	return (
		<SizedBoxContainer width={width} height={height} className={className} />
	);
}

SizedBox.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
};

SizedBox.defaultProps = {
	width: 0,
	height: 0,
	className: '',
};

export const Bold = styled.div`
	font-weight: 600;
`;

export const Line = styled.div`
	display: block;
	background-color: ${(props) =>
		props.dark ? appColors.greyLight3 : appColors.greyLight2};
	height: 1px;
	margin: ${(props) => {
		if (props.noMargin) return '0';
		if (props.large) return '3rem 0';
		if (props.medium) return '2rem 0';
		if (props.small) return '1.2rem 0';
		return '0.75rem 0';
	}};
`;

export const Checkbox = styled(MaterialCheckbox)`
	&.Mui-checked {
		color: ${appColors.blue} !important;
	}
`;

export function EllipsisButton() {
	return (
		<ButtonText type='button'>
			<FontAwesomeIcon icon={faEllipsisH} />
		</ButtonText>
	);
}

export function FormattedText({ className, children }) {
	return (
		<div className={className}>
			{children.split(/(\[.+?\])/).map((p, i) => {
				const key = i;
				if (p.startsWith('[')) {
					return (
						<Bold key={key} as='span'>
							{p.replace(/[[\]]/g, '')}
						</Bold>
					);
				}
				return <span key={key}>{p}</span>;
			})}
		</div>
	);
}

FormattedText.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
};

FormattedText.defaultProps = {
	className: '',
};
