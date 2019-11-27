import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from './Card';
import { setExamQuestionAnswer } from '../actions/examQuestions';

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
		<Card className='question-card'>
			<h4 className='h4'>{question}</h4>
			<MuiThemeProvider theme={theme}>
				<div className='question-card__opt-text'>
					Chọn phương án trả lời đúng:
				</div>
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
		</Card>
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
