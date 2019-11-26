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

function QuestionCard({ id, question, answers, setExamQuestionAnswer }) {
	const [value, setValue] = React.useState(-1);

	const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setValue(value);
        setExamQuestionAnswer(id, value);
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
						value={value}
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
};

const mapDispatchToProps = (dispatch) => ({
	setExamQuestionAnswer: (id, answer) =>
		dispatch(setExamQuestionAnswer(id, answer)),
});

export default connect(null, mapDispatchToProps)(QuestionCard);
