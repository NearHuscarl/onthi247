import PropTypes from 'prop-types';
import styled, { theme, appColors } from '../styles';

const Card = styled.div`
	/* bs code copied here to make this not break since we don't
	pass .card className to component anymore */
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);

	background-color: ${(props) => {
		if (props.background === 'white') return appColors.white;
		if (props.background === 'transparent') return 'transparent';
		return appColors.greyLight1;
	}};
	border-color: ${appColors.greyLight1};
	border-radius: ${theme.borderRound};
	padding: ${(props) => (props.noPadding ? '0' : theme.cardPadding)};
`;

export default Card;

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
	className: PropTypes.string,
	background: PropTypes.string,
	noPadding: PropTypes.bool,
};

Card.defaultProps = {
	className: '',
	background: '',
	noPadding: false,
};
