import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from './Card';
import { setExamQuestionAnswer } from '../actions/examQuestions';
import { appColors } from '../constants';

const Container = styled(Card)`
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
`;

const OptionText = styled.div`
	color: ${appColors.greyDark1};
	margin-top: 1rem;
	margin-bottom: 0.7rem;

	font-size: inherit;
	font-family: inherit;
	font-weight: inherit;
	line-height: inherit;
	letter-spacing: inherit;
`;

const theme = createMuiTheme({
	palette: {
		primary: { main: '#fc9e31' },
		secondary: { main: '#2e293b' },
	},
});

function QuestionCard({
	id,
	question,
	answers,
	answer,
	// eslint-disable-next-line no-shadow
	setExamQuestionAnswer,
}) {
	const handleChange = (event) => {
		const val = parseInt(event.target.value, 10);
		setExamQuestionAnswer(id, val);
	};

	return (
		<Container>
			<h4 className='h4'>{question}</h4>
			<MuiThemeProvider theme={theme}>
				<OptionText>
					Chọn phương án trả lời đúng:
				</OptionText>
				<FormControl component='fieldset'>
					<RadioGroup
						aria-label='answer'
						name='answer'
						value={answer}
						onChange={handleChange}
						row
					>
						{answers.map((a, index) => (
							<FormControlLabel
								key={a}
								value={index}
								control={<Radio color='primary' />}
								label={a}
								labelPlacement='end'
							/>
						))}
					</RadioGroup>
				</FormControl>
			</MuiThemeProvider>
		</Container>
	);
}

QuestionCard.propTypes = {
	id: PropTypes.string.isRequired,
	question: PropTypes.string.isRequired,
	answers: PropTypes.arrayOf(PropTypes.string).isRequired,
	answer: PropTypes.number.isRequired,
	setExamQuestionAnswer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setExamQuestionAnswer: (id, answer) =>
		dispatch(setExamQuestionAnswer(id, answer)),
});

export default connect(null, mapDispatchToProps)(QuestionCard);
