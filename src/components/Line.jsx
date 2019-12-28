import styled, { appColors } from '../styles';

const Line = styled.div`
	display: block;
	background-color: ${(props) =>
		props.dark ? appColors.greyLight3 : appColors.greyLight2};
	height: 1px;
	margin: ${(props) => {
		if (props.noMargin) return '0';
		if (props.medium) return '3rem 0';
		if (props.small) return '1.2rem 0';
		return '0.75rem 0';
	}};
`;

export default Line;
