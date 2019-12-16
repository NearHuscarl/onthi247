import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const height = '3.3rem';
const customStyles = {
	control: (props) => ({
		...props,
		height,
		minHeight: height,
		maxHeight: height,
	}),
	indicatorsContainer: (props) => ({
		...props,
		height,
		minHeight: height,
		maxHeight: height,
	}),
	dropdownIndicator: (props) => ({
		...props,
		padding: '.4rem',
	}),
	valueContainer: () => ({
		padding: '0 1rem',
	}),
};

export default function Selector({ className, placeholder, value, onChange, options }) {
	return (
		<>
			<Select
				styles={customStyles}
				className={className}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				options={options}
			/>
		</>
	);
}

Selector.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.node,
	// eslint-disable-next-line react/forbid-prop-types
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Selector.defaultProps = {
	className: '',
	placeholder: '',
};
