import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled, { theme, appColors } from '../styles';
import Button from './Buttons';

const inputHeight = '3.3rem';
const Input = styled.input`
	height: ${inputHeight};
`;

export const InputGroup = styled.div`
	width: auto;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;

	& > input,
	& > textarea {
		/* input form */
		width: 100%;
		border: 1px solid #ced4da;
		transition: border-color 0.25s ease-in-out;
		color: ${appColors.greyDark2};
		background-color: ${appColors.white};
		font-size: 1.3rem;
		border-radius: ${theme.borderRound};
		padding: 1.1rem 1.25rem;

		/* put icon on the same row */
		flex: 1 1 auto;
		width: 1%;

		:not(:last-child) {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		&:focus {
			border: 1px solid ${appColors.primary};
		}
	}

	/* resizing should not collapse textfield at all */
	& > textarea {
		min-height: 4.3rem;
		resize: none;
	}
`;

export const InputGroupFloatingButton = styled(InputGroup)`
	& > input,
	& > textarea {
		:not(:last-child) {
			border-radius: ${theme.borderRound};
		}
	}
`;

export const InputSuffixButton = styled(Button)`
	margin-left: -1px;
	height: ${inputHeight};

	:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

export function SearchBar({ className, placeholder }) {
	return (
		<InputGroup className={className}>
			<Input
				type='text'
				placeholder={placeholder}
				aria-label='Username'
				aria-describedby='basic-addon1'
			/>
			<InputSuffixButton dense type='button'>
				<FontAwesomeIcon icon={faSearch} />
			</InputSuffixButton>
		</InputGroup>
	);
}

SearchBar.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
	className: '',
	placeholder: '',
};

export default Input;
