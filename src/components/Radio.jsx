import React from 'react';
import PropTypes from 'prop-types';
import MaterialRadio from '@material-ui/core/Radio';
import MaterialRadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styled, { appColors } from '../styles';

const RadioForm = styled(FormControl)`
	/* yarn add @material-ui/core */

	/* radio button group */
	.MuiFormGroup-root {
		display: grid;
		justify-content: flex-start;
	}

	/* radio button { */
	.MuiFormControlLabel-root {
		margin-bottom: 0;
	}

	/* radio nipple */
	.MuiRadio-root {
		padding: 0.5rem;
		margin-left: 0.5rem;
	}

	/* radio nipple icon */
	.MuiSvgIcon-root {
		font-size: 1.75rem; /* a bit bigger than normal */
	}

	/* radio button text */
	.MuiFormControlLabel-label {
		font-size: inherit;
		font-family: inherit;
		font-weight: inherit;
		line-height: inherit;
		letter-spacing: inherit;
	}

	/* radio button when checked */
	.MuiRadio-colorPrimary.Mui-checked {
		color: ${appColors.primaryDark};
	}
`;

export function RadioGroup({ value, onChange, children }) {
	return (
		<RadioForm component='fieldset'>
			<MaterialRadioGroup value={value} onChange={onChange}>
				{children}
			</MaterialRadioGroup>
		</RadioForm>
	);
}

RadioGroup.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default function Radio({ value, label }) {
	return (
		<FormControlLabel
			value={value}
			control={<MaterialRadio color='primary' />}
			label={label}
		/>
	);
}

Radio.propTypes = {
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};
