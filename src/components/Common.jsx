import MaterialCheckbox from '@material-ui/core/Checkbox';
import styled, { appColors } from '../styles';

const SizedBox = styled.span`
	display: inline-block;
	height: ${(props) => props.height || '0'}rem;
	width: ${(props) => props.width || '0'}rem;
`;

const Bold = styled.div`
	font-weight: 600;
`;

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

const Checkbox = styled(MaterialCheckbox)`
	&.Mui-checked {
		color: ${appColors.blue} !important;
	}
`;

export { Bold, SizedBox, Line, Checkbox };
